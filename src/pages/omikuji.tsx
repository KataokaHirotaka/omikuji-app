import Image from 'next/image';
import { Button, Result, Header } from 'src/components';
import styles from 'src/styles/omikuji.module.scss';
import React, { useState } from 'react';

export default function omikuji() {
  const [clickFlag, setClickFlag] = useState(false);
  return (
    <>
      {/* <Header /> */}
      <Button text="もどる" id="back"/>
      <p style={{textAlign: 'center'}}>おみくじをクリックしてね</p>
      
      <div className={styles.img_wrapper} onClick={() => {
        setTimeout(() => {
          setClickFlag(true);
        }, 1000);
      }}>
        <Image 
          src="/img/omikuji.png"
          alt="おみくじ"
          width={200}
          height={200}
          className={styles.main_img}
        />
      </div>
      <Result clickFlag={clickFlag} setClickFlag={setClickFlag}/>
    </>
  )
}