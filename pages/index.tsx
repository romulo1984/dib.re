import type { NextPage } from "next";
import styles from "../styles/Home.module.scss";
import Image from "next/image";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL;

const Home: React.FC<NextPage> = () => {
  return (
    <div className={styles.container}>
      <Image src="/dibre-logo.svg" width={200} height={40} />
      <p>Em breve você vai dibrar todo mundo!</p>
    </div>
  );
};

export default Home;
