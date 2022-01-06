import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { Main } from './../components/index';

const Home = () => {
  return (
    <>
      {/* TODO */}
      <Head>
        <title>神社の入口</title>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      </Head>
      <div className={styles.container}>
        <Main id="index"/>
      </div>
    </>
    
  )
}

export default Home