import "./footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer">

  <div className="footer-content">

    <div className="footer-brand">
      <h2>CINEFLIX</h2>

      <p>
        Your platform to discover
        new movies and keep track of
        your favorites.
      </p>
    </div>

    <div className="footer-section">
      <h3>Navigation</h3>

      <a href="/#home">Home</a>
      <a href="/#popular">Popular</a>
      <a href="/#top-rated">Top Rated</a>
      <a href="/#upcoming">Upcoming</a>
    </div>

    <div className="footer-section">
      <h3>About</h3>

      <Link to="/about">About the Project</Link>
      <Link
        to="https://www.themoviedb.org/"
        target="_blank"
        rel="noreferrer"
      >
        TMDB
      </Link>
      <Link to="https://github.com/Victor-Herison/react-project" target="_blank"
        rel="noreferrer">GitHub</Link>
    </div>

    </div>

        <div className="footer-bottom">

            <span>
            © 2026 Cineflix. All rights reserved.
            </span>

            <span>
            Data provided by TMDB
            </span>

        </div>

    </footer>
  );
}

export default Footer;