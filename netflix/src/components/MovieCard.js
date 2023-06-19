import React from "react";
import styles from "@/app/style/common.module.css";
import Link from "next/link";
import Image from "next/image";

const MovieCard = (element) => {
  const { id, type, title, synopsis } = element.jawSummary;
  return (
    <>
      <div className={styles.card}>
        <div className={styles.card_image}>
          <Image
            src={element?.jawSummary?.backgroundImage?.url}
            alt="title"
            width={250}
            height={200}
          />
        </div>
        <div className={styles.card_data}>
          <h2>{title}</h2>
          <p>{synopsis}</p>
          <Link href={`/movies/${id}`}>
            <button>Read More</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
