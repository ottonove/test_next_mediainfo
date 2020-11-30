import Head from 'next/head'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
          <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
            <script type="text/javascript" src="/scripts/mediainfo.js"></script>
          </Head>
    
          <main className={styles.main}>
            <div>
                test_arrrrrr
            </div>
          </main>
        </div>
      )
}