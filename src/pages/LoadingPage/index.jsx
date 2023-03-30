import React, { memo } from 'react';

import styles from './LoadingPage.module.scss';

function LoadingPage() {
  return (
    <div className={styles.Container}>
      <div className={styles.Line} />
      <div className={styles.Line} />
      <div className={styles.Line} />
    </div>
  );
}

export default memo(LoadingPage);
