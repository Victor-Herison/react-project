import "./searchResults.css";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMulti } from "../../services/api"; 

export default function SearchResults() {
  const [params] = useSearchParams();
  const query = params.get("q") || "";
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    let cancelled = false;
    setLoading(true);
    setError(null);

    searchMulti(query)
      .then((res) => {
        if (cancelled) return;
        
        setResults(
          res.data.results.filter((r) => r.media_type !== "person")
        );
      })
      .catch(() => !cancelled && setError("Error on search. Please try again."))
      .finally(() => !cancelled && setLoading(false));

    return () => {
      cancelled = true;
    };
  }, [query]);

if (loading) return <p className="search-message">Loading...</p>;
if (error) return <p className="search-message error">{error}</p>;
if (!results.length)
  return <p className="search-message">No results for "{query}".</p>;

return (
  <section className="search-results">
    <h2 className="search-results-title">
      Results for <span>"{query}"</span>
    </h2>
    <div className="results-grid">
      {results.map((item) => (
        <div key={`${item.media_type}-${item.id}`} className="result-card">
          <span className="media-badge">
            {item.media_type === "tv" ? "TV" : "Movie"}
          </span>
          {item.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w342${item.poster_path}`}
              alt={item.title || item.name}
            />
          ) : (
            <div className="no-poster">No image</div>
          )}
          <h3>{item.title || item.name}</h3>
        </div>
      ))}
    </div>
  </section>
);}