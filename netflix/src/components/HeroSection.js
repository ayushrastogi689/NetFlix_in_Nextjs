import React from "react";
import hero from "@/app/style/herosection.module.css";
import styles from "@/app/style/common.module.css";
import Link from "next/link";
import Image from "next/image";

const HeroSection = ({ title, imageUrl }) => {
  return (
    <main className={hero.main_section}>
      <div className={styles.container}>
        <div className={styles.grid_two_section}>
          <div className={hero.hero_content}>
            <h1>{title}</h1>
            <p>
              From award winning dramas to blockbuster action movies, we have
              got you covered. Browse from thousands of lastest and greatest
              movies.
            </p>
            <button className={styles.explore_movies}>
              <Link href="/movies">Explore Movies</Link>
            </button>
          </div>
          <div className={hero.hero_image}>
            <Image src={imageUrl} alt="watching" width={500} height={500} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
