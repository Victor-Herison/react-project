import { Link } from "react-router-dom"



function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <span>Welcome to the Home Page!</span>
    <br />
    <Link to="/about"> about</Link>
    
    </div>
  )
}


export default Home

