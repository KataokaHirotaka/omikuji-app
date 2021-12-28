import styles from './styles/Button.module.scss';
import Link from 'next/link'

type Props = {
  text: string;
  id: string;
}

export function Button({text, id}: Props) {

  return (
    <div className={styles.button_wrapper}>
      <button
        className={`${styles.button} ${id.match(/omikuji/) && styles.omikuji_button}`}
      >
        {
          id.match(/omikuji/)
            && <Link href="/omikuji">{text}</Link>
        }
      </button>
    </div>
  )
}