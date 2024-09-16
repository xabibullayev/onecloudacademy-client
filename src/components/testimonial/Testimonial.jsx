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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, eius
          explicabo. Architecto culpa a tempora officiis dignissimos deleniti
          accusamus amet necessitatibus fugiat consectetur odio consequatur
          nulla sequi doloremque aspernatur repellat ipsam obcaecati dicta
          consequuntur ut adipisci, ad quibusdam distinctio optio. Architecto
          tenetur ipsum culpa rerum vel doloribus! Esse, dolorem dolores.
        </p>

        <div className={styles.last}>
          <div className={styles.user}>
            <img src="/testimonial6.webp" alt="" />
            <span>
              <h1>Jason S.Ellis</h1>
              <p>CEO & Founder</p>
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
