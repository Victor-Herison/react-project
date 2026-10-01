import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Movie from './pages/Movie';
function AppRoutes() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie/:id" element={<Movie />} />
                <Route path="/tv/:id" element={<Movie />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<h1>404 - Not Found</h1>} />
            </Routes>
            <Footer />
        </BrowserRouter> 
    )
}

export default AppRoutes;
