import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>micro front-end nextjs app</title>
        <meta name="description" content="micro front-end nextjs app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to a micro front-end <a href="https://nextjs.org">Next.js</a>{" "}
          app!
        </h1>
        <p className={styles.description}>
          This page is in{" "}
          <code className={styles.code}>project/main/pages/index.js</code>
        </p>
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>click here to view the document</p>
          </a>
        </div>
        <br />
        <br />
        <br />
        examples :
        <Link href="/mui">
          <a style={{color:"#1EC7F1"}}>
          Material UI
          </a>
          </Link>
          <br/>
          <br/>
          <br/>
          
        <Link href="/socket">
          <a style={{color:"#1EC7F1"}}>
            
          socket.io
          </a>
          </Link>
          <br/>
          <br/>
          <br/>
          
        <Link href="/dashboard">

          <a style={{color:"#1EC7F1"}}>
          simple project
          </a>
          
          </Link>
          <br/>
          <br/>
          <br/>
          
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
