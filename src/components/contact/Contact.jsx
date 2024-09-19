import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1750.2523039143368!2d59.61373480955835!3d42.45833931604533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dd9b934529575d%3A0x8730ed02d5f2f1f4!2sZhk%20Nukus%20Siti!5e0!3m2!1suz!2s!4v1726725353033!5m2!1suz!2s"
        width="600"
        height="450"
        style={{ border: "0", width: "100vw" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
