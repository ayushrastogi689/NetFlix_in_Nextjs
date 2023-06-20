import React from "react";
import styles from "@/app/style/common.module.css";

const loading = () => {
  return (
    <section className={styles.loading_section}>
      <div className={styles.loading}></div>
    </section>
  );
};

export default loading;
