import React from 'react';
import PropTypes from 'prop-types';

import styles from './AppProjectCard.module.scss';

function AppProjectCard(props) {
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

AppProjectCard.propTypes = {
  classes: PropTypes.string,

  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Object),
  ]),
};

AppProjectCard.defaultProps = {
  classes: '',
  children: '',
};

export default AppProjectCard;
