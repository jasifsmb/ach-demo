import Head from "next/head";
import React from "react";
import styles from "@/styles/Home.module.css";

export default function Layout({
  children,
}: React.PropsWithChildren): JSX.Element {
  return (
    <>
      <Head>
        <title>Stripe ACH Payment Demo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}></div>

        <div className={styles.center}>{children}</div>

        <div className={styles.grid}></div>
      </main>
    </>
  );
}