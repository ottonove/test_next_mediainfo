// import { MediaInfo } from 'mediainfo.js'
import Head from 'next/head'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  useEffect(() => {
    /* MediaInfo().then((mediainfo) => {
      mediainfo
      .analyzeData(() => file.size, readChunk(file))
      .then((result) => {
        console.log('result:', result);
      })
    }); */
  })

  const onChangeFile = (event) => {
    const file = event.target.files[0]
    if (file) {
      // output.value = 'Working…'
  
      const getSize = () => file.size
  
      const readChunk = (file) => (chunkSize, offset) =>
        new Promise((resolve, reject) => {
          const reader = new FileReader()
          reader.onload = (event) => {
            if (event.target.error) {
              reject(event.target.error)
            }
            resolve(new Uint8Array(event.target.result))
          }
          reader.readAsArrayBuffer(file.slice(offset, offset + chunkSize))
        })
  
        MediaInfo().then((mediainfo) => {
          mediainfo
          .analyzeData(getSize, readChunk(file))
          .then((result) => {
            console.log('result:', result);
          })
        });
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <script type="text/javascript" src="/scripts/mediainfo.js"></script>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <div>
          <input type="file" onChange={onChangeFile} />
        </div>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a
            href="ar01"
            className={styles.card}
          >
            AR Demo
          </a>
          <a
            href="ar02"
            className={styles.card}
          >
            AR Demo
          </a>
        </div>
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
