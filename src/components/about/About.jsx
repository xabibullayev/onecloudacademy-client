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

        <h2>EFFICIENCY</h2>

        <p>
          Efficient education emphasizes the optimal use of resources and
          maximization of time. Through scientifically planning course content,
          optimizing teaching processes, and utilizing effective management and
          teaching tools, learners can grasp core knowledge and skills in a
          shorter period.
        </p>

        <h2>INNOVATION</h2>

        <p>
          Innovation is the driving force of modern education. By continuously
          introducing new teaching methods, tools, and technologies, educational
          training institutions can stimulate learners' interest, enhance
          interaction, and increase engagement in the learning process.
        </p>

        <h2>PRACTICALITY</h2>

        <p>
          Practicality is key to developing skills and experience. Combining
          theory with hands-on practice helps learners apply classroom knowledge
          to real-world scenarios. This not only enhances the relevance of
          learning but also boosts students' competitiveness in the job market.
        </p>

        <div className={styles.last}>
          <SecondButton
            title="Learn More"
            type="link"
            icon={<EastIcon />}
            url="/"
          />
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
