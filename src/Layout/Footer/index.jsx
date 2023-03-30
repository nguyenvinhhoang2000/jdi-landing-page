import React, { memo } from 'react';

import styles from './Footer.module.scss';

function Footer() {
  return (
    <div className={styles.Footer}>
      Footer
    </div>
  );
}

Footer.propTypes = {

};

export default memo(Footer);
