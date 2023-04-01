import React from 'react';
import PropTypes from 'prop-types';

import styles from './AppServicesCard.module.scss';

function AppServicesCard(props) {
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

AppServicesCard.propTypes = {
  classes: PropTypes.string,

  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Object),
  ]),
};

AppServicesCard.defaultProps = {
  classes: '',
  children: '',
};

export default AppServicesCard;
