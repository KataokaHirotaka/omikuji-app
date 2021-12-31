import Image from 'next/image';
import { Button } from 'src/components';
import styles from 'src/styles/omikuji.module.scss';

export default function omikugi() {
  return (
    <>
      <Button text="もどる" id="back"/>
      <p style={{textAlign: 'center'}}>おみくじをクリックしてね</p>
      
      <div className={styles.img_wrapper}>
        <Image 
          src="/img/omikuji.png"
          alt="おみくじ"
          width={200}
          height={200}
          className={styles.main_img}
        />
      </div>
    </>
  )
}