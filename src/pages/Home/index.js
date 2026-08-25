import { Link } from "react-router-dom"
import {useState, useEffect, use} from "react"
import {
  popularMovies,
  nowPlayingMovies,
  topRatedMovies,
  upcomingMovies,
  trendingMovies
} from "../../services/api"
import "./home.css"
import Carousel from "../../components/Carousel"

function Home() {
  const [popular, setPopular] = useState([])
  const [nowPlaying, setNowPlaying] = useState([])
  const [topRated, setTopRated] = useState([])
  const [upcoming, setUpcoming] = useState([])
  const [trendingMovie, setTrendingMovie] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState("Now Playing")

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

    const trending = await trendingMovies()
    setTrendingMovie(trending.data.results)

    }
    loadMovies()
    setLoading(false)
  },[])
let filteredMovie = {
  "Now Playing":nowPlaying,
  "Top Rated":topRated,
  "Upcoming":upcoming,
  "Trending Movies":trendingMovie
    } [filter];
  
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
          <Carousel movies={popular} title="Popular" />
        </section>
        <section className="carousel-container">
          <div>
            <h2>Search by category</h2>
            <button className={`filter ${
                  filter === "Now Playing" ? "filter-active" : ""
                  }`} onClick={() => setFilter("Now Playing")}>Now Playing</button>
            <button className={`filter ${
                  filter === "Top Rated" ? "filter-active" : ""
                  }`}
                  onClick={() => setFilter("Top Rated")}>Top Rated</button>
            <button className={`filter ${
                  filter === "Upcoming" ? "filter-active" : ""
                  }`}
                  onClick={() => setFilter("Upcoming")}>Upcoming</button>
                  <button className={`filter ${
                  filter === "Trending Movies" ? "filter-active" : ""
                  }`}
                  onClick={() => setFilter("Trending Movies")}>Trending Movies</button>
          </div>
          <Carousel movies={filteredMovie} title={filter}/>
        </section>
      </div>
      
    </div>
  )
}


export default Home

