import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  params: {
    api_key: process.env.REACT_APP_API_KEY,
    language: "pt-BR",
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
async function airyingSeries(){
  return await api.get("/tv/airing_today");
}

async function OnTheAirSeries(){
  return await api.get("/tv/on_the_air");
}

async function popularSeries(){
  return await api.get("/tv/popular");
}

async function topRatedSeries(){
  return await api.get("tv/top_rated");
}

export {
  popularMovies,
  nowPlayingMovies,
  topRatedMovies,
  upcomingMovies,
  trendingMovies,
  airyingSeries,
  OnTheAirSeries,
  popularSeries,
  topRatedSeries
};