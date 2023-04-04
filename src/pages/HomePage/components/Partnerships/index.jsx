import React from 'react';

import partner1 from 'assets/Images/Partnerships/partner-1.png';
import partner2 from 'assets/Images/Partnerships/partner-2.png';
import partner3 from 'assets/Images/Partnerships/partner-3.png';
import partner4 from 'assets/Images/Partnerships/partner-4.png';

import styles from './Partnerships.module.scss';

function Partnerships() {
  return (
    <div className={styles.PartnerWrapper}>
      <div className={styles.CricleBlur} />

      <div className={styles.Partner}>
        <h1 className={styles.Title}>
          Partnerships
        </h1>

        <div className={styles.ItemWrapper}>
          <div className={styles.Item}>
            <img src={partner1} alt="Partnership" />
          </div>

          <div className={styles.Item}>
            <img src={partner2} alt="Partnership" />
          </div>

          <div className={styles.Item}>
            <img src={partner3} alt="Partnership" />
          </div>

          <div className={styles.Item}>
            <img src={partner4} alt="Partnership" />
          </div>
        </div>
      </div>
    </div>
  );
}

Partnerships.propTypes = {

};

export default Partnerships;
