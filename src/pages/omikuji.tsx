import Image from 'next/image';
import { Button, Result, Modal, Header } from 'src/components';
import styles from 'src/styles/omikuji.module.scss';
import React, { useCallback, useState } from 'react';

export default function Omikuji() {
  const [clickFlag, setClickFlag] = useState(false);
  const handleClick = useCallback(() => {
    // 時間を遅らせて結果を表示する
    setTimeout(() => {
      setClickFlag(true);
    }, 1000);
  }, [clickFlag]);
  return (
    <>
      {/* <Header /> */}
      <div style={{textAlign: 'center'}}>
        <Button text="もどる" id="back"/>
      </div>
      <p style={{textAlign: 'center'}}>おみくじをクリックしてね</p>
      <div className={styles.img_wrapper} onClick={handleClick}>
        <Image
          src="/img/omikuji.png"
          alt="おみくじ"
          width={200}
          height={200}
          className={styles.main_img}
        />
      </div>
      <div></div>

      <Modal clickFlag={clickFlag} setClickFlag={setClickFlag} />
      {/* <Result setClickFlag={setClickFlag}/> */}
    </>
  )
}