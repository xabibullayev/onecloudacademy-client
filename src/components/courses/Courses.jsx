import styles from "./Courses.module.scss";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarRateIcon from "@mui/icons-material/StarRate";
import EastIcon from "@mui/icons-material/East";
import MainButton from "../elements/MainButton/MainButton";

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

          <h1>Full Stack Web Development</h1>

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
            <p>Prof. Donnie Ball</p>
          </div>

          <div className={styles.bottom}>
            <div>
              <img src="/user-icon2.svg" alt="" />
              <p>70+ students</p>
            </div>

            <div>
              <p>ENROLL NOW </p>
              <EastIcon />
            </div>
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

            <div>
              <p>ENROLL NOW </p>
              <EastIcon />
            </div>
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

          <h1>Python Programming for Beginners</h1>

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

            <div>
              <p>ENROLL NOW </p>
              <EastIcon className={styles.icon} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.btn}>
        <MainButton title="View All Courses" type="link" icon={<EastIcon />} />
      </div>
    </div>
  );
}
