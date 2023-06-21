import React from "react";
import styles from "@/app/style/contact.module.css";
import { Inter, Mulish } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const mulish = Mulish({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const ContactForm = () => {
  return (
    <div>
      <form className={styles.contact_form}>
        <div className={styles.input_field}>
          <label className={styles.label} htmlFor="username">
            Name:
            <input
              className={mulish.className}
              type="text"
              name="username"
              id="username"
              placeholder="Enter your Name"
            />
          </label>
        </div>

        <div className={styles.input_field}>
          <label className={styles.label} htmlFor="email">
            Email:
            <input
              className={mulish.className}
              type="text"
              name="email"
              id="email"
              placeholder="someone@example.com"
            />
          </label>
        </div>

        <div className={styles.input_field}>
          <label className={styles.label} htmlFor="message">
            Message:
            <textarea
              className={mulish.className}
              name="message"
              id="message"
              placeholder="Your message here..."
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
