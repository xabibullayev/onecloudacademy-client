import styles from "./Classes.module.scss";

export default function Classes() {
  return (
    <div className={styles.classes}>
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

      <div className={styles.img}>
        <img src="./classes.png" alt="" />
      </div>
    </div>
  );
}
