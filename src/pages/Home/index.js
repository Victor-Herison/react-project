import { Link } from "react-router-dom"
import {useState, useEffect, use} from "react"
import {
  popularMovies,
  nowPlayingMovies,
  topRatedMovies,
  upcomingMovies,
  trendingMovies,
  airingSeries,
  onTheAirSeries,
  popularSeries,
  topRatedSeries,
  trendingSeries
} from "../../services/api"
import "./home.css"
import Carousel from "../../components/Carousel"

function Home() {
  const [popular, setPopular] = useState([])
  const [nowPlaying, setNowPlaying] = useState([])
  const [topRated, setTopRated] = useState([])
  const [upcoming, setUpcoming] = useState([])
  const [trendingMovie, setTrendingMovie] = useState([])
  const [popularSerie, setPopularSerie] = useState([])
  const [airyingSerie, setAiringSerie] = useState([])
  const [onTheAirSerie, setOnTheAirSerie] = useState([])
  const [topRatedSerie, setTopRatedSerie] = useState([])
  const [trendingSerie, setTrendingSerie] = useState([])
  const [loading, setLoading] = useState(true)
  const [filterMovie, setFilterMovie] = useState("Now Playing")
  const[filterSerie, setFilterSerie] = useState("Airing Today")

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

  //SERIES
  useEffect(()=>{
    setLoading(true)
    async function loadSeries(){
    const popular = await popularSeries()
    setPopularSerie(popular.data.results)

    const airing = await airingSeries()
    setAiringSerie(airing.data.results)

    const topRated = await topRatedSeries()
    setTopRatedSerie(topRated.data.results)

    const onTheAir = await onTheAirSeries()
    setOnTheAirSerie(onTheAir.data.results)

    const trending = await trendingSeries()
    setTrendingSerie(trending.data.results)
    }
    loadSeries()
    setLoading(false)
  },[])
  
let filteredMovie = {
  "Now Playing":nowPlaying,
  "Top Rated":topRated,
  "Upcoming":upcoming,
  "Trending Movies":trendingMovie
    } [filterMovie];

  let filteredSerie = {
    "Airing Today":airyingSerie,
    "On The Air":onTheAirSerie,
    "Popular":popularSerie,
    "Top Rated":topRatedSerie,
    "Trending":trendingSerie
  } [filterSerie];

  return (
    <div>
      <div className="container-1">
        <div className="hero-content">
          <h2 id="home">Welcome to</h2>
          <h1>CINEFLIX</h1>
          <span>Your favorite movie platform to discover new films</span>
          <a href="#popular">Explore Now</a>
        </div>
      </div>
      <div className="container-2">
        <section className="carousel-container">
          <h1 id="popular">Movies</h1>
          <Carousel movies={popular} title="Popular" type="movie"/>
        </section>
        <section className="carousel-container">
          <div>
            <h2 id="search-category">Search by category</h2>
            <button id="now-playing" className={`filter ${
                  filterMovie === "Now Playing" ? "filter-active" : ""
                  }`} onClick={() => setFilterMovie("Now Playing")}>Now Playing</button>
            <button id="top-rated" className={`filter ${
                  filterMovie === "Top Rated" ? "filter-active" : ""
                  }`}
                  onClick={() => setFilterMovie("Top Rated")}>Top Rated</button>
            <button id="upcoming" className={`filter ${
                  filterMovie === "Upcoming" ? "filter-active" : ""
                  }`}
                  onClick={() => setFilterMovie("Upcoming")}>Upcoming</button>
                  <button className={`filter ${
                  filterMovie === "Trending Movies" ? "filter-active" : ""
                  }`}
                  onClick={() => setFilterMovie("Trending Movies")}>Trending Movies</button>
          </div>
          <Carousel movies={filteredMovie} title={filterMovie} type="movie"/>
        </section>
        <section className="carousel-container">
          <div>
            <h1>TV Series</h1>
            <h2>Search by category</h2>
            <button className={`filter ${
                  filterSerie === "Airing Today" ? "filter-active" : ""
                  }`} onClick={() => setFilterSerie("Airing Today")}>Airing Today</button>
            <button className={`filter ${
                  filterSerie === "Top Rated" ? "filter-active" : ""
                  }`}
                  onClick={() => setFilterSerie("Top Rated")}>Top Rated</button>
            <button className={`filter ${
                  filterSerie === "On The Air" ? "filter-active" : ""
                  }`}
                  onClick={() => setFilterSerie("On The Air")}>On The Air</button>
            <button className={`filter ${
                  filterSerie === "Trending" ? "filter-active" : ""
                  }`}
                  onClick={() => setFilterSerie("Trending")}>Trending Series</button>
          </div>
          <Carousel movies={filteredSerie} title={filterSerie} type="tv"/>
        </section>
      </div>
      
    </div>
  )
}


export default Home

