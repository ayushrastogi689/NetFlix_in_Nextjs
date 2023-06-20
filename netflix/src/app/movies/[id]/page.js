import React from "react";
import styles from "@/app/style/common.module.css";
import Image from "next/image";
import Link from "next/link";

const page = async ({ params }) => {
  const id = params.id;
  const url =
    "https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en";

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a8bba4f561msh2974ffb3a084a57p1da0bbjsn9edb8337237d",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const data = await response.json();
  const main_data = data[0]?.details;
  //console.log(main_data);

  return (
    <div className={styles.container}>
      <h2 className={styles.movie_title}>
        Netflix \ <span>{main_data?.type}</span>
      </h2>
      <div>
        <Image
          src={main_data?.backgroundImage?.url}
          alt={main_data?.title}
          width={600}
          height={300}
        />
      </div>
      <div>
        <h1>{main_data?.title}</h1>
        <p>{main_data?.synopsis}</p>
      </div>
    </div>
  );
};

export default page;
