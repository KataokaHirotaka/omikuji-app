import styles from 'src/components/styles/Main.module.scss';
import { Button } from 'src/components/index';
import { useEffect, useRef, MouseEvent } from 'react';
import { useRouter } from 'next/router';

type Props = {
  id: string
}

export function Main ({id}: Props) {
  const mainEl = useRef<HTMLDivElement>(null);
  const secondMainEl = useRef<HTMLDivElement>(null);
  
  const handleClick = () => {
    const main = mainEl.current;
    if (main != null) {
      main.classList.add(styles.scaleUp);
    }

    const secondMain = secondMainEl.current;
    if (secondMain != null) {
      secondMain.classList.add(styles.fadeIn);
    }
  }

  // 画面遷移を遅らせてアニメーションを魅せる
  const delayTransition = () => {
    const href = window.location.href;
    console.log(location);
    setTimeout(() => {
      window.location.href = href + '/jinja';
    }, 900);
  }

  return (
    <>
      {
        id.match(/index/)
          &&
            <div ref={mainEl} className={styles.main}>
              <div className={styles.button_wrapper} onClick={() => {
                handleClick();
                delayTransition();
              }}>
                <Button text="神社に入る" id="jinja" />
              </div>
            </div>
      }
      {
        id.match(/jinja/)
          &&
            <div ref={secondMainEl} className={styles.second_main}>
              <Button text="おみくじを引く" id="omikuji" />
              <Button text="帰る" id="return" />
            </div>
      }
    </>
  )
}