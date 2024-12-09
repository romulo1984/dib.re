import type { NextPage } from "next";
import styles from "../styles/About.module.scss";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL;

const Home: React.FC<NextPage> = () => {
  return (
    <div className={styles.container}>
      <h2>dib.re</h2>
      <div>
        <p>Praça Philogomiro Lannes, 160</p>
        <p>Vitória-ES</p>
        <p>CEP: 29060-740</p>
        <p>Tel: +55 27 99805 0970</p>
      </div>
    </div>
  );
};

export default Home;
