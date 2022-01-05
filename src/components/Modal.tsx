import { useCallback } from 'react';
import { Result } from 'src/components/index';
import styles from 'src/components/styles/Modal.module.scss';

type Props = {
  clickFlag: boolean
  setClickFlag: React.Dispatch<React.SetStateAction<boolean>>
}

export const Modal = ({clickFlag, setClickFlag}: Props) => {
  const handleClick = useCallback(() => {
    setClickFlag(false);
  }, []);
  return (
    <div className={`${styles.modal_content_wrapper} ${styles.active}`}>
      <div className={`${styles.overlay} ${clickFlag && styles.active}`} onClick={handleClick}></div>
      <div className={`${styles.modal} ${clickFlag && styles.active}`}>
        <Result setClickFlag={setClickFlag}/>
      </div>
    </div>
  )
}