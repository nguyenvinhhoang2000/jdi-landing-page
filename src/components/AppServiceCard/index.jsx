import React, { memo } from 'react';
import PropTypes from 'prop-types';

import styles from './AppServiceCard.module.scss';

function AppServiceCard(props) {
  const {
    classes,

    children,
  } = props;

  return (
    <div
      className={`${classes} ${styles.Card}`}
    >
      {children}
    </div>
  );
}

AppServiceCard.propTypes = {
  classes: PropTypes.string,

  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Object),
  ]),
};

AppServiceCard.defaultProps = {
  classes: '',
  children: '',
};

export default memo(AppServiceCard);
