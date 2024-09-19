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
          Our comprehensive business chain covers education, IT development, and
          IT services. We aim to bridge training with employment opportunities
          and can offer job placements for some participants.
        </span>

        <div className={styles.progress}>
          <div className={styles.title}>
            <h1>Practice-Oriented Teaching</h1>
            <b>100%</b>
          </div>
          <div className={styles.container}>
            <div className={styles.bar1}></div>
          </div>
        </div>

        <div className={styles.progress}>
          <div className={styles.title}>
            <h1>Real project practise</h1>
            <b>95%</b>
          </div>
          <div className={styles.container}>
            <div className={styles.bar2}></div>
          </div>
        </div>

        <div className={styles.progress}>
          <div className={styles.title}>
            <h1>Industry Ecosystem</h1>
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
