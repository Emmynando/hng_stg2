import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import tv from "/images/tv.png";
import star from "/images/Star.svg";
import { MovieDeet } from "../component/models/movieDetail";
import { sliceRevenue } from "../component/js/utils.ts";
import styles from "../component/Layout/MovieDetail.module.css";

export default function MovieDetails() {
  const { id } = useParams();

  const [movDetail, setMovDetail] = useState<MovieDeet | null>(null);

  useEffect(() => {
    fetchMoviesDetail();
  }, [id]);

  async function fetchMoviesDetail() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNjdiZmYwYTQ4NGU1NTQ0Yzk1OTM2MDExNjc4NWNhMSIsInN1YiI6IjY0ZmYxZTAyNmEyMjI3MDExYTc5ZmY4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ghLLEA_f8FXk9A-2e8CtnGBV9HD8yfJ-Ac6Iqz5EJu0",
      },
    };
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
        options
      );
      const response = await data.json();
      // console.log(response);
      setMovDetail(response);
    } catch (err) {
      alert("Error While Page");
    }
  }

  // converting relasea date to UTC
  const dateString = movDetail?.release_date;
  const utcDate = new Date(dateString + "T00:00:00Z");
  return (
    <div className={styles.container}>
      <div className={styles["left-container"]}>
        <nav>
          <Link to="/">
            <header>
              <div>
                <img src={tv} alt="chukwuemeka" />
              </div>
              <div>
                <h1> MovieBox</h1>
              </div>
            </header>
          </Link>
          <ul>
            <li>Home</li>
            <li>Movies</li>
            <li>TV Series</li>
            <li>Upcoming</li>
          </ul>
          <div className={styles.p}>
            <p>
              Play movie quizes and earn free tickets
              <span>50k people are playing now</span>
              <br />
              <button>start playing</button>
            </p>
          </div>
          <h6>login</h6>
        </nav>
      </div>

      {movDetail != null && (
        <div className={styles["right-container"]}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movDetail.poster_path}`}
            alt=""
            className={styles.p}
            data-testid="movie-poster"
          />
          <div className={styles.slug}>
            <div>
              <p data-testid="movie-title">
                {movDetail.title} <span className={styles.dot}>|</span>
              </p>
              <p data-testid="movie-release-date">
                {utcDate.toISOString()}
                <span className={styles.dot}>|</span>
              </p>
              <p data-testid="movie-runtime"> {movDetail.runtime}ms</p>
            </div>
            <div>
              <p className={styles.rating}>
                <img src={star} alt="start" />
                {movDetail.vote_average.toFixed(1)}
                <span className={styles.revenue}>
                  | {sliceRevenue(movDetail.revenue)}
                </span>
              </p>
            </div>
          </div>
          <div className={styles["bottom-section"]}>
            <div>
              <p data-testid="movie-overview"> {movDetail.overview}</p>
              <button className={styles["rated-button"]}>
                Top rated movie #65
              </button>
              <select>
                <option>Awards 9 nominations</option>
              </select>
            </div>
            <div className={styles["button-section"]}>
              <button>See showtimes</button>
              <button>More watch options</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
