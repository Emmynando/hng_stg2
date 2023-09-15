import twitter from "/images/twitter.svg";
import youtube from "/images/youtube.svg";
import instagram from "/images/instagram.svg";
import facebook from "/images/facebook.svg";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div>
      <footer className={styles.footer}>
        <div className={styles["social-media"]}>
          <img src={facebook} alt="chukwuemeka" />
          <img src={instagram} alt="chukwuemeka" />
          <img src={twitter} alt="chukwuemeka" />
          <img src={youtube} alt="chukwuemeka" />
        </div>
        <div>
          <ul>
            <li>Condition of Use</li>
            <li>Privacy & Policy</li>
            <li>Press Room</li>
          </ul>
        </div>
        <div>
          <p>&copy; 2021 MovieBox by Adriana Eka Prayudha </p>
        </div>
      </footer>
    </div>
  );
}
