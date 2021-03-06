import Image from 'next/image';
import { Button, Result, Modal, Header } from 'src/components';
import styles from 'src/styles/omikuji.module.scss';
import React, { useCallback, useState } from 'react';
import Head from 'next/head'

const Omikuji = () => {
  // おみくじの結果を作成
  const [randomNum, setRandomNum] = useState<number>();
  const createRandomNum = () => {
    const random_num = Math.floor(Math.random() * 7 + 1);
    setRandomNum(random_num);
  }
  const [clickFlag, setClickFlag] = useState(false);
  const handleClick = useCallback(() => {
    setTimeout(() => {
      setClickFlag(true);
      createRandomNum();
    }, 1000);
  }, []);


  return (
    <>
      <Head>
        <title>おみくじを引くよ</title>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      </Head>
      <div className={`${styles.omikuji_content_wrapper} ${clickFlag && styles.inactive}`}>
        <div className={styles.omikuji_content}>
          <div className={styles.button_wrapper}>
            <Button text="帰る" id="back"/>
          </div>
          <p className={styles.omikuji_content_text}>おみくじをクリックしてね</p>
          <div className={styles.img_wrapper} onClick={handleClick}>
            <Image
              src="/img/omikuji.png"
              alt="おみくじ"
              width={300}
              height={300}
              className={styles.main_img}
            />
          </div>
        </div>
      </div>
      {/* TODO useContextを使う*/}
      <Modal randomNum={randomNum} clickFlag={clickFlag} setClickFlag={setClickFlag} />
    </>
  )
}

export default Omikuji