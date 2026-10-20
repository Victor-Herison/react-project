import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import { IoIosSearch } from "react-icons/io";

function Header() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const term = query.trim();
    if (!term) return;
    navigate(`/search?q=${encodeURIComponent(term)}`);
  }

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">CINEFLIX</Link>
      </div>

      <form className="search" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search movies..."
          className="search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="search-button" aria-label="Search">
          <IoIosSearch />
        </button>
      </form>

      <nav>
        <Link to="/">Home</Link>
        <a href="/#popular">Movies</a>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}

export default Header;