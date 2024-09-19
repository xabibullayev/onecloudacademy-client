import Link from "next/link";
import styles from "./SecondButton.module.scss";

export default function SecondButton({ type, title, icon, url }) {
  if (type === "link") {
    return (
      <Link href={url} className={styles.btn}>
        <div>{icon}</div>
        {title}
      </Link>
    );
  } else if (type === "button") {
    return (
      <button className={styles.btn}>
        <div>{icon}</div>
        {title}
      </button>
    );
  }
}
