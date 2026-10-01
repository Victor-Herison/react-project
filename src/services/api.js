import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  params: {
    api_key: process.env.REACT_APP_API_KEY,
    language: "en-US",
    page: 1
  }
});

async function popularMovies() {
  return await api.get("/movie/popular");
}

async function nowPlayingMovies() {
  return await api.get("/movie/now_playing");
}

async function topRatedMovies() {
  return await api.get("/movie/top_rated");
}

async function upcomingMovies() {
  return await api.get("/movie/upcoming");
}

async function trendingMovies() {
  return await api.get("/trending/movie/day");
}
// TV SERIES
async function airingSeries(){
  return await api.get("/tv/airing_today");
}

async function onTheAirSeries(){
  return await api.get("/tv/on_the_air");
}

async function popularSeries(){
  return await api.get("/tv/popular");
}

async function topRatedSeries(){
  return await api.get("tv/top_rated");
}

async function trendingSeries(){
  return await api.get("/trending/tv/day");
}

async function searchMovie(query){
  return await api.get(`/movie/${query}`);
}

async function searchTV(query){
  return await api.get(`/tv/${query}`);
}

export {
  popularMovies,
  nowPlayingMovies,
  topRatedMovies,
  upcomingMovies,
  trendingMovies,
  airingSeries,
  onTheAirSeries,
  popularSeries,
  topRatedSeries,
  trendingSeries,
  searchMovie,
  searchTV
};