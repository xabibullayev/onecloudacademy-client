import styles from "./Choose.module.scss";

export default function Choose() {
  return (
    <div className={styles.choose}>
      <div className={styles.left}>
        <p>Why Choose Us</p>

        <h1>
          One Platform & Many
          <b>
            Courses
            <img src="/title-shape.png" alt="" />
          </b>
          For You
        </h1>

        <span>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown
        </span>

        <div className={styles.progress}>
          <div className={styles.title}>
            <h1>Learning Milestones</h1>
            <b>90%</b>
          </div>
          <div className={styles.container}>
            <div className={styles.bar1}></div>
          </div>
        </div>

        <div className={styles.progress}>
          <div className={styles.title}>
            <h1>Learning Milestones</h1>
            <b>92%</b>
          </div>
          <div className={styles.container}>
            <div className={styles.bar2}></div>
          </div>
        </div>

        <div className={styles.progress}>
          <div className={styles.title}>
            <h1>Learning Milestones</h1>
            <b>95%</b>
          </div>
          <div className={styles.container}>
            <div className={styles.bar3}></div>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <img src="/choose-full.png" alt="" />
      </div>
    </div>
  );
}
