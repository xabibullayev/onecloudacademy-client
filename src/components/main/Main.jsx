import SecondButton from "../elements/SecondButton/SecondButton";
import styles from "./Main.module.scss";
import EastIcon from "@mui/icons-material/East";

export default function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <p>Educational center</p>
        <h1>
          Emprove Your Future, Learn Digital
          <b>
            Skills
            <img src="/title-shape.png" alt="" />
          </b>
        </h1>
        <span>
          Embark on a Journey of Digital Discovery: Expert-Led Courses Designed
          to Equip
        </span>

        <div className={styles.action}>
          <SecondButton type="link" title="Enroll Now" icon={<EastIcon />} />
        </div>
      </div>

      <div className={styles.right}>
        <img src="/banner1.webp" alt="" />

        <div className={styles.card}>
          <div>
            <img src="/user-icon.png" alt="" />
          </div>
          <h1>STUDENTS</h1>
          <p>1000+</p>
          <img src="/persons.png" alt="" />
        </div>
      </div>
    </div>
  );
}
