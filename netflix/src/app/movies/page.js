import MovieCard from "@/components/MovieCard";
import Link from "next/link";
import styles from "@/app/style/common.module.css";

import React from "react";

const Movies = async () => {
  const url =
    "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a8bba4f561msh2974ffb3a084a57p1da0bbjsn9edb8337237d",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }

  const response = await fetch(url, options);
  const data = await response.json();
  const titleData = data?.titles;
  // console.log(data);

  return (
    <section className={styles.movieSection}>
      <div className={styles.container}>
        <h1>Movies, Series and TV Shows</h1>
        {titleData?.map((element) => {
          return <MovieCard key={element.id} {...element} />;
        })}
      </div>
    </section>
  );
};

export default Movies;
