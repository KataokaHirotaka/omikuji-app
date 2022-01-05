import styles from './styles/Button.module.scss';
import Link from 'next/link'

type Props = {
  text: string;
  id: string;
}

export function Button({text, id}: Props) {

  return (
    <>
        {
          id.match(/omikuji/)
            && <Link href="/omikuji">
                <button className={`${styles.button} ${styles.omikuji_button}`}>{text}</button>
               </Link>
        }
        {
          id.match(/back/)
            && <Link href="/">
                <button className={`${styles.button} ${styles.back_button}`}>{text}</button>
               </Link>
        }
        {
          id.match(/close/)
            && <div className={styles.close_button}><span></span></div>
        }
        {
          id.match(/jinja/)
            && <button className={`${styles.button} ${styles.go_button}`}>{text}</button>
        }
        {/* {
          id.match(/jinja/)
            && <Link href="/jinja">
                <button className={`${styles.button} ${styles.go_button}`}>{text}</button>
               </Link>
        } */}
        {
          id.match(/return/)
           && <Link href="/">
                <button className={`${styles.button} ${styles.return_button}`}>{text}</button>
              </Link>
        }
    </>
  )
}