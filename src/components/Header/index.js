import { Link } from "react-router-dom"
import "./header.css"
import { IoIosSearch } from "react-icons/io";



function Header() {

    return (
      <header className="header">
        <div className="logo">
            CINEFLIX
        </div>
        <div className="search">
          <input type="text" placeholder="Search movies..." className="search-input" />
          <button className="search-button">
            <IoIosSearch />
          </button>
        </div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">Movies</Link>
            <Link to="/contact">About</Link>
        </nav>
      </header>
    )

}

export default Header
