import { Result } from 'src/components/index';
import styles from 'src/components/styles/Modal.module.scss';

type Props = {
  clickFlag: boolean
  setClickFlag: React.Dispatch<React.SetStateAction<boolean>>
}

export const Modal = ({clickFlag, setClickFlag}: Props) => {
  return (
    <div>
      <div className={`${styles.overlay} ${clickFlag && styles.active}`}></div>
      <div>
        <Result setClickFlag={setClickFlag}/>
      </div>
    </div>
  )
}