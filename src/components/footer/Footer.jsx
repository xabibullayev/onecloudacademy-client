import styles from "./Footer.module.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import NorthIcon from "@mui/icons-material/North";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.left}>
          <img src="/logo.png" alt="" />

          <p>
            Lorem ipsum amet, consectetur adipiscing elit. Suspendis varius enim
            eros elementum tristique. Duis cursus.
          </p>

          <a href="">support.onecloud@gmail.com</a>

          <div className={styles.links}>
            <span>
              <FacebookIcon />
            </span>
            <span>
              <InstagramIcon />
            </span>
            <span>
              <TelegramIcon />
            </span>
          </div>
        </div>
        <div className={styles.right}>
          <h1>Links</h1>

          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Courses</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={styles.right}>
          <h1>Legal</h1>
          <ul>
            <li>Trems of Use</li>
            <li>Tearm & Condition</li>
            <li>Privacy Policy</li>
            <li>Licensencing</li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <a href="home" className={styles.up}>
          <NorthIcon />
        </a>
      </div>
    </div>
  );
}
