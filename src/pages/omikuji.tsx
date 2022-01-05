import Image from 'next/image';
import { Button, Result, Modal, Header } from 'src/components';
import styles from 'src/styles/omikuji.module.scss';
import React, { useCallback, useState } from 'react';

const Omikuji = () => {
  const [clickFlag, setClickFlag] = useState(false);
  const handleClick = useCallback(() => {
    setTimeout(() => {
      setClickFlag(true);
    }, 1000);
  }, [clickFlag]);
  return (
    <>
      <div className={`${styles.omikuji_content_wrapper} ${clickFlag && styles.inactive}`}>
        <div className={styles.button_wrapper}>
          <Button text="帰る" id="back"/>
        </div>
        <div className={styles.omikuji_content}>
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
      <Modal clickFlag={clickFlag} setClickFlag={setClickFlag} />
    </>
  )
}

export default Omikuji