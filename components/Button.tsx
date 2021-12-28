import styles from './styles/Button.module.scss';
import Link from 'next/link'

type Props = {
  text: string;
  id: string;
}

export function Button({text, id}: Props) {

  return (
    <div className={styles.button_wrapper}>
        {
          id.match(/omikuji/)
            && <Link href="/omikuji"><button className={`${styles.button} ${styles.omikuji_button}`}>{text}</button></Link>
        }
    </div>
  )
}