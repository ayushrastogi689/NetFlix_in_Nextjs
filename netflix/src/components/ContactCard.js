import React from "react";
import styles from "@/app/style/contact.module.css";
import {MdEmail} from "react-icons/md"
const ContactCard = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.grid_card}>
          <i><MdEmail /></i>
            <h2>Email</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
