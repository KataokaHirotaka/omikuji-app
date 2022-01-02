import Image from 'next/image';
import { Button } from './index';
import styles from './styles/Result.module.scss';

type Props = {
  clickFlag: boolean;
  setClickFlag: React.Dispatch<React.SetStateAction<boolean>>;
}
export function Result({clickFlag, setClickFlag}: Props) {
  
  // おみくじの結果を表示
  const random_num = Math.floor(Math.random() * 7 + 1);
  return (
    <div style={{display: clickFlag ? 'block' : 'none'}}>
      <p>結果</p>
      <div className="close_button_wrapper" onClick={() => {
        setClickFlag(false);
      }}>
        <Button text='' id="close"/>
      </div>
      <div className={styles.result_wrapper}>
        <Image 
          src={random_num ? `/img/${random_num}.png` : ''}
          alt="おみくじの結果"
          width={500}
          height={500}
        />
      </div>
    </div>
  )
}