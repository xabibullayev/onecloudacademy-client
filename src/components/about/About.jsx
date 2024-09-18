import styles from "./About.module.scss";
import SecondButton from "../elements/SecondButton/SecondButton";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import EastIcon from "@mui/icons-material/East";
import Image from "next/image";

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.left}>
        <div className={styles.first}>
          <Image
            src="/about1.webp"
            width={1000}
            height={1000}
            style={{ width: "80%", height: "auto" }}
          />
          <Image
            src="/about2.webp"
            width={1000}
            height={1000}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className={styles.second}>
          <Image
            src="/about3.webp"
            width={1000}
            height={1000}
            style={{ width: "100%", height: "auto", marginTop: "50px" }}
          />

          <div>
            <span>
              <h1>10</h1>
              <p>years exprerience</p>
            </span>
            <ArrowOutwardIcon />
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <p className={styles.subtitle}>About One Cloud</p>

        <h1>
          Discover Our Vision for Digital
          <b>
            Education
            <img src="/title-shape.png" alt="" />
          </b>
        </h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>

        <h2>OUR MISSION & VISION</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit
        </p>

        <div className={styles.last}>
          <SecondButton title="Learn More" type="link" icon={<EastIcon />} />
          <div className={styles.user}>
            <img src="/about4.webp" alt="" />
            <span>
              <h1>Jason S.Ellis</h1>
              <p>CEO & Founder</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
