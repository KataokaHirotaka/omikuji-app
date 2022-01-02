import styles from './styles/Header.module.scss';

export function Header() {
  return (
    <div className={styles.header_wrapper}>
      <header>
        <nav className={styles.nav}>
          <div className={styles.login_btn}>
            <p>ログイン</p>
          </div>
          <div className={styles.regist_btn}>
            <p>会員登録</p>
          </div>
          {/* <div>
            <p>マイページ</p>
          </div> */}
        </nav>
      </header>
    </div>
  )
}