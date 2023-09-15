import { useEffect, useState } from "react";
import Movies from "../component/models/movies";
import HeroSection from "../component/Layout/HeroSection";
import MovieList from "../component/Layout/MovieList";
import Footer from "../component/UI/Footer";
import NavBar from "../component/UI/NavBar";

const api_key = import.meta.env.VITE_REACT_APP_API_KEY;

function HomePage() {
  const [movieArr, setMovieArr] = useState<Movies[]>([]);
  const [hero, setHero] = useState<Movies[]>([]);
  useEffect(() => {
    fetchMovies();
  }, []);

  async function fetchMovies() {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`
      );
      const response = await data.json();
      const topTen = response.results;
      const randomtopTen = topTen
        .sort(() => Math.random() - Math.random())
        .slice(0, 10);
      setMovieArr(randomtopTen);
      const randomMovie =
        randomtopTen[Math.floor(Math.random() * randomtopTen.length)];
      setHero(randomMovie);
    } catch (err) {
      alert("Error While Page");
    }
  }
  return (
    <>
      <NavBar />
      <HeroSection props={hero} />
      <MovieList props={movieArr} />
      <Footer />
    </>
  );
}

export default HomePage;
