"use client";
import React, { useState } from "react";
import styles from "@/app/style/contact.module.css";
import { Inter, Mulish } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const mulish = Mulish({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const ContactForm = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  }

  function handleSubmit() {}

  return (
    <div>
      <form className={styles.contact_form} onSubmit={handleSubmit}>
        <div className={styles.input_field}>
          <label className={styles.label} htmlFor="username">
            Name:
            <input
              className={mulish.className}
              type="text"
              name="username"
              id="username"
              placeholder="Enter your Name"
              value={user.username}
              onChange={handleChange}
              autoComplete="off"
              required
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
              value={user.email}
              onChange={handleChange}
              autoComplete="off"
              required
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
              value={user.message}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </label>
        </div>
        <div className={mulish.className}>
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
