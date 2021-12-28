import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { Main } from './../components/index';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Main />
    </div>
  )
}

export default Home
