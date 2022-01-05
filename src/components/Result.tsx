import Image from 'next/image';
import { useCallback } from 'react';
import { Button } from './index';
import styles from './styles/Result.module.scss';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

type Props = {
  setClickFlag: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Result = ({setClickFlag}: Props) => {
  const handleClick = useCallback(() => {
    setClickFlag(false);
  }, []);

  const { width, height } = useWindowSize();

  // おみくじの結果を表示
  const random_num = Math.floor(Math.random() * 7 + 1);
  return (
    <div className={styles.result_content_wrapper} onClick={handleClick}>
      <div className={styles.close_button_wrapper} onClick={handleClick}>
        <Button text='' id="close"/>
      </div>
      <div className={styles.result_wrapper}>
        <Image
          src={random_num ? `/img/${random_num}.png` : ''}
          alt="おみくじの結果"
          width={300}
          height={300}
        />
      </div>
      <Confetti
        width={width}
        height={height}
        // colors={["#e2d06e","#FEE9A0", "#66FF99", "#99FFFF", "#DDFFFF", "#9900FF", "#FF3300", "#78FF94", "#FF773E"]}
        recycle={true}
      />
    </div>
  )
}