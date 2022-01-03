import styles from './styles/Main.module.scss';
import { Button, Result, Header } from './index';

export function Main () {
  return (
    <>
      {/* <Header /> */}
      <div className={styles.main}>
        <div>
        </div>
        <Button text="おみくじを引く" id="omikuji" />
      </div>
    </>
  )
}