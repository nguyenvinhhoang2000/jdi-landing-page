import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import styles from './AppLink.module.scss';

function AppLink(props) {
  const {
    size,
    classes,
    to,

    children,
  } = props;

  return (
    <Link
      to={to}
      className={`${classes} ${styles.Link} ${size === 'lg' ? styles.Lg : styles.Md}`}
    >
      {children}
    </Link>
  );
}

AppLink.propTypes = {
  to: PropTypes.string,
  size: PropTypes.string,
  classes: PropTypes.string,

  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Object),
  ]),
};

AppLink.defaultProps = {
  to: '/',
  size: 'lg',
  classes: '',
  children: '',
};

export default memo(AppLink);
