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

export {
  popularMovies,
  nowPlayingMovies,
  topRatedMovies,
  upcomingMovies
};