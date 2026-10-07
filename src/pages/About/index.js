import "./about.css";

function About() {
  return (
    <main className="about-page">
      <section className="about-container">

        <h1>About CINEFLIX</h1>

        <p className="about-intro">
          CINEFLIX is a personal web development project created to explore
          modern frontend development while building a simple and enjoyable
          movie and TV series discovery platform.
        </p>

        <section className="about-section">
          <h2>About the Project</h2>

          <p>
            This project was developed as a personal learning experience,
            focusing on React, API integration, component-based development,
            routing, and responsive user interfaces.
          </p>

          <p>
            CINEFLIX allows users to explore popular movies and TV series,
            discover content by category, and view detailed information about
            each title.
          </p>
        </section>

        <section className="about-section">
          <h2>TMDB API</h2>

          <p>
            CINEFLIX uses the
            <a
              href="https://www.themoviedb.org/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}TMDB (The Movie Database)
            </a>
            API to retrieve movie and TV series information, including
            posters, ratings, descriptions, genres, and other metadata.
          </p>

          <p className="tmdb-notice">
            This product uses the TMDB API but is not endorsed or certified
            by TMDB.
          </p>
        </section>

        <section className="about-section">
          <h2>Source Code</h2>

          <p>
            CINEFLIX is an open personal project. You can explore the source
            code, study its implementation, or clone the project from GitHub.
          </p>

          <a
            href="https://github.com/Victor-Herison/react-project.git"
            target="_blank"
            rel="noreferrer"
            className="about-button"
          >
            View on GitHub
          </a>

          <h3>Running the project locally</h3>

          <p>Clone the repository:</p>

          <pre>
            <code>
              git clone https://github.com/Victor-Herison/react-project.git
            </code>
          </pre>

          <p>Enter the project directory:</p>

          <pre>
            <code>
              cd react-project
            </code>
          </pre>

          <p>Install the dependencies:</p>

          <pre>
            <code>
              npm install
            </code>
          </pre>

          <p>Start the development server:</p>

          <pre>
            <code>
              npm start
            </code>
          </pre>

          <p>
            You will also need to configure your TMDB API credentials in the
            project's environment variables before running the application.
          </p>
        </section>

        <section className="about-section">
          <h2>Developer</h2>

          <p>
            CINEFLIX was developed as a personal project by Victor Herison
            Pereira Patrocinio.
          </p>

          <a
            href="https://www.linkedin.com/in/victor-herison-pereira-patrocinio-515a07295/?isSelfProfile=true"
            target="_blank"
            rel="noreferrer"
            className="about-button"
          >
            LinkedIn
          </a>
        </section>

      </section>
    </main>
  );
}

export default About;