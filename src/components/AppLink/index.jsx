import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import styles from './AppLink.module.scss';

function AppLink(props) {
  const {
    classes,
    to,

    children,
  } = props;

  return (
    <Link
      to={to}
      className={`${classes} ${styles.Link}`}
    >
      {children}
    </Link>
  );
}

AppLink.propTypes = {
  to: PropTypes.string,
  classes: PropTypes.string,

  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Object),
  ]),
};

AppLink.defaultProps = {
  to: '/',
  classes: '',
  children: '',
};

export default AppLink;
