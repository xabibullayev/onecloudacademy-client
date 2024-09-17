"use client";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import MainButton from "../elements/MainButton/MainButton";
import EastIcon from "@mui/icons-material/East";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export default function Navbar() {
  const [sidebarActive, setSidebarActive] = useState(false);

  console.log(sidebarActive);

  return (
    <div className={styles.navbar} id="home">
      <div className={styles.logo}>
        <img src="/logo.png" alt="" />
      </div>

      <ul className={sidebarActive ? styles.activeList : styles.list}>
        <li>
          <Link href="/">Home</Link>
          <button onClick={() => setSidebarActive(false)}>X</button>
        </li>
        <li>
          <Link href="/">About</Link>
        </li>
        <li>
          <Link href="/">Courses</Link>
        </li>
        <li>
          <Link href="/">Contact</Link>
        </li>
      </ul>

      <div className={styles.enroll}>
        <MainButton
          type="link"
          title="Enroll Now"
          icon={<EastIcon />}
          url="/enroll"
        />
      </div>

      <div className={styles.menuBtn} onClick={() => setSidebarActive(true)}>
        <MenuIcon />
      </div>
    </div>
  );
}
