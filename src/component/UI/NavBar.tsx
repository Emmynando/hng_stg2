import tv from "/images/tv.png";
import search from "/images/search.svg";
import styles from "./NavBar.module.css";

// https://image.tmdb.org/t/p/original/${movie.backdrop_path

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <div className={styles["flex-nav"]}>
        <div>
          <header>
            <img src={tv} alt="chukwuemeka" />
            <h1> MovieBox</h1>
          </header>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <input type="text" placeholder="what do you want to watch?" />
          <img src={search} alt="" className={styles.search} />
        </div>
        <div>
          <ul>
            <li>
              <button>sign in</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
