import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js - About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          This is the About page.
        </h1>

        <p className={styles.description}>
          It doesn't get much{' '}
          <code className={styles.code}>BETTER THAN THIS!</code>
        </p>

       </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
