"use client";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import MainButton from "../elements/MainButton/MainButton";
import EastIcon from "@mui/icons-material/East";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useRef, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar() {
  const [sidebarActive, setSidebarActive] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSidebarActive(false);
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className={styles.navbar} id="home">
      <div className={styles.logo}>
        <img src="/logo.png" alt="" />
      </div>

      <ul
        className={sidebarActive ? styles.activeList : styles.list}
        ref={dropdownRef}
      >
        <li>
          <Link href="/">Home</Link>
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

      <div className={styles.menu}>
        {sidebarActive ? (
          <CloseIcon
            onClick={() => setSidebarActive(false)}
            className={styles.menuBtn}
          />
        ) : (
          <MenuIcon
            className={styles.menuBtn}
            onClick={() => setSidebarActive(true)}
          />
        )}
      </div>
    </div>
  );
}
