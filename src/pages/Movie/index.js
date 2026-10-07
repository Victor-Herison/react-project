import {
  searchMovie,
  searchTV,
  getSimilarMovies,
  getSimilarTV,
  getVideosMovies,
  getVideosTV,
} from "../../services/api";
import { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { HiArrowSmLeft, HiPlay } from "react-icons/hi";
import Carousel from "../../components/Carousel";
import "./movie.css";

const IMG_BASE = "https://image.tmdb.org/t/p";

const SERVICES = {
  movie: { details: searchMovie, similar: getSimilarMovies, videos: getVideosMovies },
  tv: { details: searchTV, similar: getSimilarTV, videos: getVideosTV },
};

const INITIAL_STATE = { media: null, similar: [], videos: [], loading: true, error: null };

// Trailer > Teaser > o resto; dentro do tipo, oficiais primeiro e depois os mais recentes
const TYPE_PRIORITY = { Trailer: 0, Teaser: 1 };

function prepareVideos(results = []) {
  return results
    .filter((v) => v.site === "YouTube")
    .sort((a, b) => {
      const typeDiff = (TYPE_PRIORITY[a.type] ?? 99) - (TYPE_PRIORITY[b.type] ?? 99);
      if (typeDiff !== 0) return typeDiff;
      if (a.official !== b.official) return a.official ? -1 : 1;
      return new Date(b.published_at) - new Date(a.published_at);
    });
}

function useMediaDetails(type, id) {
  const [state, setState] = useState(INITIAL_STATE);

  useEffect(() => {
    let ignore = false;
    const { details, similar, videos } = SERVICES[type];

    setState(INITIAL_STATE);

    async function load() {
      const [detailsRes, similarRes, videosRes] = await Promise.allSettled([
        details(id),
        similar(id),
        videos(id),
      ]);

      if (ignore) return;

      if (detailsRes.status === "rejected") {
        console.error("Erro ao carregar detalhes:", detailsRes.reason);
        setState({ ...INITIAL_STATE, loading: false, error: "Não foi possível carregar o conteúdo." });
        return;
      }

      if (similarRes.status === "rejected") {
        console.error("Erro ao carregar similares:", similarRes.reason);
      }
      if (videosRes.status === "rejected") {
        console.error("Erro ao carregar vídeos:", videosRes.reason);
      }

      setState({
        media: detailsRes.value.data,
        similar: similarRes.status === "fulfilled" ? similarRes.value.data.results : [],
        videos: videosRes.status === "fulfilled" ? prepareVideos(videosRes.value.data.results) : [],
        loading: false,
        error: null,
      });
    }

    load();
    return () => {
      ignore = true;
    };
  }, [type, id]);

  return state;
}

function VideoGallery({ videos }) {
  const [activeKey, setActiveKey] = useState(videos[0]?.key);
  const [playing, setPlaying] = useState(false);

  if (videos.length === 0) return null;

  const active = videos.find((v) => v.key === activeKey) ?? videos[0];

  function selectVideo(key) {
    setActiveKey(key);
    setPlaying(true);
  }

  return (
    <section className="movie-videos">
      <h2>Videos</h2>

      <div className="video-player">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${active.key}?autoplay=1&rel=0`}
            title={active.name}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : (
          // O iframe só é carregado após o clique (melhora a performance da página)
          <button
            type="button"
            className="video-poster"
            onClick={() => setPlaying(true)}
            aria-label={`Play ${active.name}`}
          >
            <img src={`https://img.youtube.com/vi/${active.key}/hqdefault.jpg`} alt="" />
            <HiPlay className="video-play-icon" />
          </button>
        )}
      </div>

      <p className="video-title">{active.name}</p>

      {videos.length > 1 && (
        <ul className="video-list">
          {videos.map((video) => (
            <li key={video.id}>
              <button
                type="button"
                className={`video-thumb ${video.key === active.key ? "active" : ""}`}
                onClick={() => selectVideo(video.key)}
              >
                <img
                  src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                  alt=""
                  loading="lazy"
                />
                <span className="video-type">{video.type}</span>
                <span className="video-name">{video.name}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default function Movie() {
  const { id } = useParams();
  const { pathname } = useLocation();
  const type = pathname.startsWith("/movie") ? "movie" : "tv";

  const { media, similar, videos, loading, error } = useMediaDetails(type, id);

  if (loading) return <div className="movie-loading">Loading...</div>;
  if (error) return <div className="movie-error">{error}</div>;

  const title = media.title ?? media.name;
  const year = (media.release_date ?? media.first_air_date)?.slice(0, 4);
  const runtime = media.runtime ?? media.episode_run_time?.[0];

  const backdrop = media.backdrop_path
    ? `, url(${IMG_BASE}/original${media.backdrop_path})`
    : "";

  return (
    <main className="movie-page">
      <section
        className="movie-hero"
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              var(--background-secondary) 10%,
              rgba(10, 14, 20, 0.85) 50%,
              rgba(10, 14, 20, 0.4)
            )${backdrop}
          `,
        }}
      >
        <div className="movie-content">
          <Link to="/" className="back-button">
            <HiArrowSmLeft />
            Back
          </Link>

          <div className="movie-info">
            {media.poster_path && (
              <div className="movie-poster">
                <img src={`${IMG_BASE}/w500${media.poster_path}`} alt={title} />
              </div>
            )}

            <div className="movie-details">
              <h1>{title}</h1>

              {media.tagline && <p className="movie-tagline">{media.tagline}</p>}

              <div className="movie-meta">
                <span>⭐ {media.vote_average?.toFixed(1) ?? "N/A"}</span>
                {year && <span>{year}</span>}
                {runtime && <span>{runtime} min</span>}
              </div>

              <div className="movie-genres">
                {media.genres?.map((genre) => (
                  <span key={genre.id}>{genre.name}</span>
                ))}
              </div>

              <p className="movie-overview">{media.overview}</p>

              {media.homepage && (
                <a
                  href={media.homepage}
                  target="_blank"
                  rel="noreferrer"
                  className="movie-button"
                >
                  Official Website
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* key força o reset do player ao trocar de filme/série */}
      <VideoGallery key={`${type}-${id}`} videos={videos} />

      <Carousel movies={similar} title="Similar" type={type} />
    </main>
  );
}