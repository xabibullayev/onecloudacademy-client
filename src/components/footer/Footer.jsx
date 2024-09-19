import styles from "./Footer.module.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import NorthIcon from "@mui/icons-material/North";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.left}>
          <img src="/logo.png" alt="" />

          <p>Open up a chining life with us.</p>

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
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/">Courses</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </div>
        <div className={styles.right}>
          <h1>Legal</h1>
          <ul>
            <li>
              <Link href="/">Trems of Use</Link>
            </li>
            <li>
              <Link href="/">Tearm & Condition</Link>
            </li>
            <li>
              <Link href="/">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/">Licensencing</Link>
            </li>
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
