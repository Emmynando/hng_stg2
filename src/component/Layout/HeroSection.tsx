import imdb from "/images/imdb.svg";
import fruit from "/images/fruit.svg";
import classes from "./HeroSection.module.css";

function HeroSection({ props }: any) {
  const stylez = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w500${props.poster_path})`,
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "35rem",
  };
  return (
    <div style={stylez} className={classes.container} key={props.key}>
      <div className={classes.box}>
        <p className={classes.title}>{props.title}</p>
        <div className={classes.rating}>
          <div>
            <img src={imdb} />
            {(props.vote_average * 10).toFixed(1)} / 100
          </div>
          <p>
            <img src={fruit} />
            {Math.round(props.popularity)}%
          </p>
        </div>
        <p className={classes.overview}>{props.overview}</p>
        <button className={classes.trailer}> Watch Trailer</button>
      </div>
    </div>
  );
}

export default HeroSection;
