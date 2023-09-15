import imdb from "/images/imdb.svg";
import fruit from "/images/fruit.svg";
import styles from "./MovieList.module.css";
import arrow from "/images/rite-arrow.svg";
import { Link } from "react-router-dom";
// import Movies from "../models/movies";
export default function MovieList({ props }: any) {
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       accept: "application/json",
  //       Authorization:
  //         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNjdiZmYwYTQ4NGU1NTQ0Yzk1OTM2MDExNjc4NWNhMSIsInN1YiI6IjY0ZmYxZTAyNmEyMjI3MDExYTc5ZmY4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ghLLEA_f8FXk9A-2e8CtnGBV9HD8yfJ-Ac6Iqz5EJu0",
  //     },
  //   };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3> Featured Movie</h3>
        <div className={styles.arrow}>
          <p>see more</p>
          <img src={arrow} />
        </div>
      </div>
      <div className={styles["movie-container"]}>
        {props.map((item: any) => (
          <div
            key={item.id}
            className={styles["movie-card"]}
            data-testid="movie-card"
          >
            <Link to={`/${item.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt=""
                className={styles.p}
                data-testid="movie-poster"
              />
              <p data-testid="movie-release-date">
                {new Date(item.release_date).getFullYear()}
              </p>
              <p className={styles.titlez} data-testid="movie-title">
                {item.title}
              </p>
              <div className={styles.rating}>
                <div>
                  <img src={imdb} />
                  {(item.vote_average * 10).toFixed(1)} / 100
                </div>
                <p>
                  <img src={fruit} />
                  {Math.round(item.popularity)}%
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
