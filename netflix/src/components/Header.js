import React from "react";
import styles from "@/app/style/navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className={styles.main_header}>
      <div className={styles.navbar_brand}>
        <Link href={"/"}>
          <Image src="/netflix_logo.png" alt="logo" width={150} height={150} />
        </Link>
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
