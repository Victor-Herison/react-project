CINEFLIX
CINEFLIX is a personal frontend project developed with React and the TMDB API. The project was created as a learning experience focused on building a simple movie and TV series discovery platform.

Users can explore popular titles, browse content by category, and view detailed information about movies and TV series.
Features
- Popular movies
- Top-rated movies
- Upcoming movies
- Trending movies
- TV series
- Top-rated series
- Airing today and currently airing series
- Trending series
- Individual movie and series pages
- TMDB ratings
- Responsive interface
- Links to official websites
Technologies
- React
- React Router
- Axios
- React Icons
- TMDB API
- CSS
TMDB API
CINEFLIX uses the TMDB API to retrieve information about movies and TV series, including:
- Titles
- Posters and backdrops
- Ratings
- Genres
- Release dates
- Descriptions
- Official websites
- TV series information
This product uses the TMDB API but is not endorsed or certified by TMDB.

Installation
1. Clone the repository
git clone https://github.com/Victor-Herison/react-project.git

2. Enter the project directory
cd react-project

3. Install dependencies
npm install

4. Configure the TMDB API
Create a .env file in the root directory:
REACT_APP_API_URL=https://api.themoviedb.org/3
REACT_APP_API_KEY=YOUR_TMDB_API_KEY

Replace YOUR_TMDB_API_KEY with your own TMDB API key.
5. Start the development server
npm start

The application will normally be available at:
http://localhost:3000

Project Structure
src/
├── components/
│   └── Carousel/
│
├── pages/
│   ├── Home/
│   ├── Movie/
│   └── About/
│
├── services/
│   └── api.js
│
├── App.js
└── index.js

The structure may change as the project evolves.
Purpose
CINEFLIX is primarily a personal learning project.

The main objectives were to practice:
- React component development
- React Router
- API consumption
- Axios
- React Hooks
- Dynamic routes
- Responsive UI development
- Integration with external APIs
The project is intentionally kept relatively simple, focusing on fundamental concepts rather than complex architecture.
Developer
Developed by Victor Herison Pereira Patrocinio.
- GitHub
- LinkedIn
License
This project is intended for personal and educational purposes.
