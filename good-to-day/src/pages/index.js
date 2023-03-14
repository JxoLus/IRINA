import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";

export default function Home() {
  const [onInputSearch, setOnInputSearch] = useState("");

  function onSubmitSearch(e) {
    if (e.key === "Enter") {
      if (onInputSearch !== "") {
        var searchLink = `http://www.google.com/search?q=${onInputSearch}`;
        location.href = searchLink;
        setOnInputSearch("");
      }
    }
  }

  return (
    <>
      <Head>
        <title>New Tab</title>
        <meta name="description" content="Clean Startup Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/new.png" />
      </Head>
      <div className={styles.title}>
        <p>IRINA</p>
      </div>
      <div className={styles.searchBar}>
        <FaGoogle size="36" color="white" />
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search Google"
          autoFocus
          required
          value={onInputSearch}
          onChange={(e) => setOnInputSearch(e.target.value)}
          onKeyDown={onSubmitSearch}
        ></input>
      </div>
    </>
  );
}
