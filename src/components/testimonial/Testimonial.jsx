import styles from "./Testimonial.module.scss";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";

export default function Testimonial() {
  return (
    <div className={styles.testimonial}>
      <div className={styles.left}>
        <img src="testimonial.png" alt="" />
      </div>

      <div className={styles.right}>
        <p className={styles.subtitle}>Testimonials</p>

        <h1>
          Voices of Success: Hear from Our
          <b>
            Students
            <img src="/title-shape.png" alt="" />
          </b>
        </h1>

        <p>
          In my experience all the teachers are very supportive and friendly and
          the placement process has been very smooth throughout. I would always
          be very grateful for the lifelong connections I made
        </p>

        <div className={styles.last}>
          <div className={styles.user}>
            <img src="/testimonial6.webp" alt="" />
            <span>
              <h1>Aadhya Chaturvedi</h1>
              <p>Student</p>
            </span>
          </div>

          <div className={styles.btn}>
            <button>
              <WestIcon />
            </button>
            <button>
              <EastIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
