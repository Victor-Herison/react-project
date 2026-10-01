import "./carousel.css"
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import { useState } from "react";
import { Link } from "react-router-dom";

function Carousel({ movies, title, type }) {
    const [position, setPosition] = useState(0);
    const cardWidth = 200; // Width of each card in pixels
    const visibleCards = 9;
    const maxPosition = cardWidth * (movies.length - visibleCards);
    
    
    const next = () => {
        setPosition((current) => Math.min(current + cardWidth, maxPosition))
    }
    const previus = () => {
        setPosition((current) => Math.max(current - cardWidth, 0))
    }

  return (
    <div className="carousel">
        <div className="carousel-header">
            <span>{title}</span>
            <div>
                <HiArrowSmLeft className="arrow" onClick={previus}/>
                <HiArrowSmRight className="arrow" onClick={next}/>
            </div>
        </div>
        <div className="carousel-content"
        style={{transform: `translateX(-${position}px)`}}>
          {movies.map((movie) => (
            <Link to={`/${type}/${movie.id}`} className="carousel-item" key={movie.id}>
            <div className="carousel-item" key={movie.id}>
                <div className="poster">

                  <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
                  <span className="vote-average">{Math.round(movie.vote_average * 10)/10}</span>
                </div>
              
            </div>
            </Link>
          ))}
        </div>
    </div>
  )
}

export default Carousel
