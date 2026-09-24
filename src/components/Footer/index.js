import "./footer.css";

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

      <a href="/">About the Project</a>
      <a
        href="https://www.themoviedb.org/"
        target="_blank"
        rel="noreferrer"
      >
        TMDB
      </a>
      <a href="/">GitHub</a>
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