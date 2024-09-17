import MainButton from "../elements/MainButton/MainButton";
import styles from "./Subscibe.module.scss";
import MailIcon from "@mui/icons-material/Mail";

export default function Subscribe() {
  return (
    <div className={styles.subscribe}>
      <div className={styles.container}>
        <div className={styles.left}>
          <img src="/newsletter-icon.svg" alt="" />
          <h1>Enter Your email To Subscribe Our Newsletter</h1>
        </div>

        <div className={styles.right}>
          <div className={styles.input}>
            <input type="text" placeholder="Write your email" />
            <MainButton title="Subscribe" type="link" icon={<MailIcon />} />
          </div>

          <div className={styles.input2}>
            <input type="text" placeholder="Write your email" />
            <MainButton title="Subscribe" type="link" icon={<MailIcon />} />
          </div>
        </div>
      </div>
    </div>
  );
}
