import { Link } from "react-router-dom"
import {useState, useEffect} from "react"
import {
  popularMovies,
  nowPlayingMovies,
  topRatedMovies,
  upcomingMovies
} from "../../services/api"
import "./home.css"

function Home() {
  const [popular, setPopular] = useState([])
  const [nowPlaying, setNowPlaying] = useState([])
  const [topRated, setTopRated] = useState([])
  const [upcoming, setUpcoming] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    async function loadMovies(){
    const popular = await popularMovies()
    setPopular(popular.data.results)

    const nowPlaying = await nowPlayingMovies()
    setNowPlaying(nowPlaying.data.results)

    const topRated = await topRatedMovies()
    setTopRated(topRated.data.results)

    const upcoming = await upcomingMovies()
    setUpcoming(upcoming.data.results)
    }
    console.log(topRated)
    loadMovies()
    setLoading(false)
  },[])

  
  return (
    <div>
      <div className="container-1">
        <div className="hero-content">
          <h2>Welcome to</h2>
          <h1>CINEFLIX</h1>
          <span>Your favorite movie platform to discover new films</span>
          <button>Explore Now</button>
        </div>
      </div>
      <div className="container-2">
        <section className="carousel-container">
          <h2>Top Rated Movies</h2>
          <div className="carousel">
            {topRated.map(movie => (
              <div key={movie.id} className="carousel-item">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <h3>{movie.title}</h3>
              </div>
            ))}
          </div>
        </section>
        <section className="carousel-container">
          <h2>Search by Category</h2>
        </section>
      </div>
      
    </div>
  )
}


export default Home

