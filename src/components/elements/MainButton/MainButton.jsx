import Link from "next/link";
import styles from "./MainButton.module.scss";

export default function MainButton({ type, title, icon, url = "" }) {
  if (type === "link") {
    return (
      <Link href={url} className={styles.btn}>
        {title}
        {icon}
      </Link>
    );
  } else if (type === "button") {
    return (
      <button className={styles.btn}>
        {title} {icon}
      </button>
    );
  }
}
