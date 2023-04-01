import React, { memo } from 'react';
// import PropTypes from 'prop-types';

import logo from 'assets/Images/Services/blockchain-consulting.svg';

import styles from './ServicesCard.module.scss';

function ServicesCard() {
  return (
    <div className={styles.CardWrapper}>
      <div className={styles.Card}>
        <img src={logo} alt="Title" />

        <h1>
          Blockchain Consulting
        </h1>

        <span>
          Integer purus odio, placerat nec rhoncu in, ullamcorper nec dolor.
        </span>
      </div>
    </div>
  );
}

ServicesCard.propTypes = {
};

ServicesCard.defaultProps = {
};

export default memo(ServicesCard);
