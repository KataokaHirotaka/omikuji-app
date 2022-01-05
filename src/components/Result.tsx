import Image from 'next/image';
import { useCallback, useEffect } from 'react';
import { Button } from './index';
import styles from './styles/Result.module.scss';

type Props = {
  randomNum: number | undefined;
  setClickFlag: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Result = ({ randomNum, setClickFlag }: Props) => {
  const handleClick = useCallback(() => {
    setClickFlag(false);
  }, []);

  return (
    <div className={styles.result_content_wrapper} onClick={handleClick}>
      <div className={styles.close_button_wrapper} onClick={handleClick}>
        <Button text='' id="close"/>
      </div>
      <div className={styles.result_wrapper}>
        <Image
          src={randomNum != undefined ? `/img/${randomNum}.png` : '/img/1.png'}
          alt="おみくじの結果"
          width={300}
          height={300}
        />
      </div>
    </div>
  )
}