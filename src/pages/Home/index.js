import { Link } from "react-router-dom"
import {useState, useEffect} from "react"
import {
  popularMovies,
  nowPlayingMovies,
  topRatedMovies,
  upcomingMovies
} from "../../services/api"
import "./home.css"
import Carousel from "../../components/Carousel"

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
          <Carousel movies={popular} filter="Popular" />
        </section>
        <section className="carousel-container">
          <Carousel movies={topRated} filter="Top Rated" />
        </section>
      </div>
      
    </div>
  )
}


export default Home

