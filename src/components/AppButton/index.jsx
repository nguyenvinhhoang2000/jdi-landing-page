/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import styles from './AppButton.module.scss';

function AppButton(props) {
  const {
    disabled,
    loading,
    outline,
    isLink,

    type,
    classes,
    name,
    to,

    children,

    onclick,
  } = props;

  return (
    isLink ? (
      <Link
        to={to}
        classNam={`${classes} ${outline ? styles.OutlineGradient : styles.BgGradient}`}
      >
        {children}
      </Link>
    ) : (
      <button
        type={type}
        className={`${classes} ${outline ? styles.OutlineGradient : styles.BgGradient}`}
        disabled={loading || disabled}
        onClick={onclick}
      >
        {
        !loading ? children
          : `${name}...`
        }
      </button>
    )

  );
}

AppButton.propTypes = {
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  outline: PropTypes.bool,
  isLink: PropTypes.bool,

  to: PropTypes.string,
  type: PropTypes.string,
  classes: PropTypes.string,
  name: PropTypes.string,

  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Object),
  ]),

  onclick: PropTypes.func.isRequired,
};

AppButton.defaultProps = {
  disabled: false,
  loading: false,
  outline: false,
  isLink: false,

  to: '/',
  type: 'button',
  classes: '',
  name: 'Loading',
  children: '',
};

export default AppButton;
