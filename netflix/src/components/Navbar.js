"use client";

import React, { useState } from "react";
import styles from "@/app/style/navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className="">
        <ul className={styles.navbarList}>
          <li className={styles.navbarItem}>
            <Link className={styles.navbarLinks} href={"/"}>
              Home
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link className={styles.navbarLinks} href={"/movies"}>
              Movies
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link className={styles.navbarLinks} href={"/about"}>
              About
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link className={styles.navbarLinks} href={"/contact"}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
