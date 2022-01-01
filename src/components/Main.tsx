import React, { useState } from 'react';
import styles from './styles/Main.module.scss';
import { Button, Result } from './index';

export function Main () {
  return (
    <div className={styles.main}>
      <div>
      </div>
      <Button text="おみくじを引く" id="omikuji" />
    </div>
  )
}