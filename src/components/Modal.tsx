import { useCallback } from 'react';
import { Result } from 'src/components/index';
import styles from 'src/components/styles/Modal.module.scss';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

type Props = {
  randomNum: number | undefined;
  clickFlag: boolean;
  setClickFlag: React.Dispatch<React.SetStateAction<boolean>>
}

export const Modal = ({ randomNum, clickFlag, setClickFlag }: Props) => {
  const handleClick = useCallback(() => {
    setClickFlag(false);
  }, []);

  const { width, height } = useWindowSize();

  return (
    <div className={`${styles.modal_content_wrapper} ${clickFlag && styles.active}`}>
      <div className={`${styles.overlay} ${clickFlag && styles.active}`} onClick={handleClick}>
      </div>
      <div className={`${styles.modal} ${clickFlag && styles.active}`}>
        <Confetti
          width={width}
          height={height}
          // colors={["#e2d06e","#FEE9A0", "#66FF99", "#99FFFF", "#DDFFFF", "#9900FF", "#FF3300", "#78FF94", "#FF773E"]}
          recycle={true}
        />
        <Result randomNum={randomNum} setClickFlag={setClickFlag}/>
      </div>
    </div>
  )
}