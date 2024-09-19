import MainButton from "../elements/MainButton/MainButton";
import styles from "./Categories.module.scss";
import EastIcon from "@mui/icons-material/East";

export default function Categories() {
  return (
    <div className={styles.categories}>
      <p>Course Category</p>

      <div className={styles.title}>
        <h1>
          Explore Top
          <b>
            Categories
            <img src="/title-shape.png" alt="" />
          </b>
        </h1>
        <MainButton
          title="View All Categories"
          type="link"
          icon={<EastIcon />}
        />
      </div>

      <div className={styles.cards}>
        <div className={styles.row}>
          <div className={styles.card}>
            <img src="/categories1.svg" alt="" />
            <h1>Web Development</h1>
            <p>2 courses</p>
          </div>

          <div className={styles.card}>
            <img src="/categories2.svg" alt="" />
            <h1>English</h1>
            <p>3 courses</p>
          </div>

          <div className={styles.card}>
            <img src="/categories2.svg" alt="" />
            <h1>Chineese</h1>
            <p>3 courses</p>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.card}>
            <img src="/categories3.svg" alt="" />
            <h1>Data Science</h1>
            <p>2 courses</p>
          </div>

          <div className={styles.card}>
            <img src="/categories4.svg" alt="" />
            <h1>Mobile Applications</h1>
            <p>1 courses</p>
          </div>

          <div className={styles.card}>
            <img src="/categories6.svg" alt="" />
            <h1>Management systems</h1>
            <p>1 courses</p>
          </div>
        </div>
      </div>
    </div>
  );
}
