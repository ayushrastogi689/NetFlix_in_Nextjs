import React from "react";
import styles from "@/app/style/contact.module.css";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

const ContactCard = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.grid_card}>
            <i>
              <MdEmail />
            </i>
            <h2>Email</h2>
            <h3>Monday to Friday</h3>
            <p className={styles.last_para}> Expected response time: 48 Hrs</p>
            <Link href="ayushrastogi689@gmail.com">Send Email<span></span></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
