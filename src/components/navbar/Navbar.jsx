import Link from "next/link";
import styles from "./Navbar.module.scss";
import MainButton from "../elements/MainButton/MainButton";
import EastIcon from "@mui/icons-material/East";

export default function Navbar() {
  return (
    <div className={styles.navbar} id="home">
      <div className={styles.logo}>
        <img src="/logo.png" alt="" />
      </div>

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

      <div className={styles.enroll}>
        <MainButton
          type="link"
          title="Enroll Now"
          icon={<EastIcon />}
          url="/enroll"
        />
      </div>
    </div>
  );
}
