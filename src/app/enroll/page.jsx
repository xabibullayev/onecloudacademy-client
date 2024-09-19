"use client";
import Navbar from "@/components/navbar/Navbar";
import styles from "./page.module.scss";
import Footer from "@/components/footer/Footer";
import { useState } from "react";
import axios from "axios";

export default function Enroll() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [course, setCourse] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:5000/api/sendToTelegram", {
        name,
        phone,
        age,
        gender,
        course,
        time,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.enroll}>
      <Navbar />

      <div className={styles.form}>
        <div className={styles.left}>
          <p className={styles.subtitle}>Contact Us</p>

          <h1>
            Get In
            <b>
              Touch
              <img src="/title-shape.png" alt="" />
            </b>
          </h1>

          <div className={styles.cards}>
            <div className={styles.card}>
              <span>
                <img src="/contact1.svg" alt="" />
              </span>
              <div>
                <h1>Email-Us :</h1>
                <p>support@onecloud.uz</p>
              </div>
            </div>
            <div className={styles.card}>
              <span>
                <img src="/contact2.svg" alt="" />
              </span>
              <div>
                <h1>Call Us :</h1>
                <p>support@onecloud.uz</p>
              </div>
            </div>
            <div className={styles.card}>
              <span>
                <img src="/contact3.svg" alt="" />
              </span>
              <div>
                <h1>Office :</h1>
                <p>Mountain street 23, Nukus</p>
              </div>
            </div>
          </div>
        </div>

        <form className={styles.right} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              placeholder="Full Name*"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Phone number*"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className={styles.inputGroup}>
            <input
              type="text"
              placeholder="Age*"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="" disabled>
                Gender*
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className={styles.inputGroup}>
            <input
              name="course"
              type="text"
              placeholder="Course*"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            />
            <input
              name="time"
              type="text"
              placeholder="What time*"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>

          <div>
            <button>Send</button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}
