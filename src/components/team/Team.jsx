import East from "@mui/icons-material/East";
import SecondButton from "../elements/SecondButton/SecondButton";
import styles from "./Team.module.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";

export default function Team() {
  return (
    <div className={styles.team}>
      <div className={styles.left}>
        <p>Team Members</p>

        <h1>Our Expert</h1>
        <b>
          Lecturer
          <img src="/title-shape.png" alt="" />
        </b>
        <span>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has
        </span>
        <SecondButton title="Join Our Team" type="link" icon={<East />} />
      </div>

      <div className={styles.right}>
        <div className={styles.card}>
          <img src="/team1.webp" alt="" />
          <h1>Tim R.Moyer</h1>
          <p>Lecturer</p>
          <div>
            <span>
              <FacebookIcon />
            </span>
            <span>
              <InstagramIcon />
            </span>
            <span>
              <TelegramIcon />
            </span>
          </div>
        </div>
        <div className={styles.card}>
          <img src="/team1.webp" alt="" />
          <h1>Tim R.Moyer</h1>
          <p>Lecturer</p>
          <div>
            <span>
              <FacebookIcon />
            </span>
            <span>
              <InstagramIcon />
            </span>
            <span>
              <TelegramIcon />
            </span>
          </div>
        </div>
        <div className={styles.card}>
          <img src="/team1.webp" alt="" />
          <h1>Tim R.Moyer</h1>
          <p>Lecturer</p>
          <div>
            <span>
              <FacebookIcon />
            </span>
            <span>
              <InstagramIcon />
            </span>
            <span>
              <TelegramIcon />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
