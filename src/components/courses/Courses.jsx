import styles from "./Courses.module.scss";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarRateIcon from "@mui/icons-material/StarRate";
import EastIcon from "@mui/icons-material/East";
import MainButton from "../elements/MainButton/MainButton";
import Link from "next/link";

export default function Courses() {
  return (
    <div className={styles.courses}>
      <div className={styles.title}>
        <div>
          <p>Most Featured Courses</p>
        </div>

        <div>
          <h1>
            Choose Our Top
            <b>
              Courses
              <img src="/title-shape.png" alt="" />
            </b>
          </h1>
        </div>
      </div>

      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.top}>
            <img src="/courses2.webp" alt="" />
            <span>New</span>
          </div>

          <div className={styles.grade}>
            <p>Intermediate</p>
            <p>
              <FavoriteBorderIcon />
            </p>
          </div>

          <h1>NodeJs backend development</h1>

          <div className={styles.rate}>
            <p>(5 ratings) </p>
            <p>
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
            </p>
          </div>

          <div className={styles.user}>
            <img src="/courses-user1.webp" alt="" />
            <p>Mukhammed X.</p>
          </div>

          <div className={styles.bottom}>
            <div>
              <img src="/user-icon2.svg" alt="" />
              <p>70+ students</p>
            </div>

            <Link href="/enroll">
              <p>ENROLL NOW </p>
              <EastIcon />
            </Link>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.top}>
            <img src="/courses1.webp" alt="" />
            <span>New</span>
          </div>

          <div className={styles.grade}>
            <p>Intermediate</p>
            <p>
              <FavoriteBorderIcon />
            </p>
          </div>

          <h1>General English Master</h1>

          <div className={styles.rate}>
            <p>(5 ratings) </p>
            <p>
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
            </p>
          </div>

          <div className={styles.user}>
            <img src="/courses-user2.webp" alt="" />
            <p>Prof. Donnie Ball</p>
          </div>

          <div className={styles.bottom}>
            <div>
              <img src="/user-icon2.svg" alt="" />
              <p>70+ students</p>
            </div>

            <Link href="/enroll">
              <p>ENROLL NOW </p>
              <EastIcon />
            </Link>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.top}>
            <img src="courses3.webp" alt="" />
            <span>New</span>
          </div>

          <div className={styles.grade}>
            <p>Intermediate</p>
            <p>
              <FavoriteBorderIcon />
            </p>
          </div>

          <h1>HSK (Hanyu Shuiping Kaoshi)</h1>

          <div className={styles.rate}>
            <p>(5 ratings) </p>
            <p>
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
            </p>
          </div>

          <div className={styles.user}>
            <img src="/courses-user3.webp" alt="" />
            <p>Prof. Donnie Ball</p>
          </div>

          <div className={styles.bottom}>
            <div>
              <img src="/user-icon2.svg" alt="" />
              <p>70+ students</p>
            </div>

            <Link href="/enroll">
              <p>ENROLL NOW </p>
              <EastIcon className={styles.icon} />
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.btn}>
        <MainButton title="View All Courses" type="link" icon={<EastIcon />} />
      </div>
    </div>
  );
}
