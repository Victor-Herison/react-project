import { searchMovie } from "../../services/api";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { HiArrowSmLeft } from "react-icons/hi";
import "./movie.css";

export default function Movie() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function loadMovieById() {
      const req = await searchMovie(id);
      setMovie(req.data);
    }

    loadMovieById();
  }, [id]);

  if (!movie) {
    return <div className="movie-loading">Loading...</div>;
  }

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
            ),
            url(https://image.tmdb.org/t/p/original${movie.backdrop_path})
          `,
        }}
      >
        <div className="movie-content">

          <Link to="/" className="back-button">
            <HiArrowSmLeft />
            Back
          </Link>

          <div className="movie-info">

            <div className="movie-poster">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </div>

            <div className="movie-details">

              <h1>{movie.title}</h1>

              <p className="movie-tagline">
                {movie.tagline}
              </p>

              <div className="movie-meta">
                <span>⭐ {movie.vote_average.toFixed(1)}</span>
                <span>{movie.release_date.slice(0, 4)}</span>
                <span>{movie.runtime} min</span>
              </div>

              <div className="movie-genres">
                {movie.genres.map((genre) => (
                  <span key={genre.id}>
                    {genre.name}
                  </span>
                ))}
              </div>

              <p className="movie-overview">
                {movie.overview}
              </p>

              {movie.homepage && (
                <a
                  href={movie.homepage}
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
    </main>
  );
}