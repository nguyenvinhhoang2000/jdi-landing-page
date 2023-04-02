import React, { memo } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { LOCATIONS } from 'constants/index';

import logo from 'assets/Images/jdi-logo.png';

import styles from './Header.module.scss';

function Header() {
  return (
    <div className={styles.HeaderWrapper}>
      <div className={styles.Header}>
        <Link to={LOCATIONS.HOME}>
          <img className={styles.Logo} src={logo} alt="logo" />
        </Link>

        <ul className={styles.Nav}>
          <li className={styles.NavItem}>
            <NavLink to={LOCATIONS.ABOUT_US}>
              About Us
            </NavLink>
          </li>

          <li className={styles.NavItem}>
            <NavLink to={LOCATIONS.SERVICES}>
              Services
            </NavLink>
          </li>

          <li className={styles.NavItem}>
            <NavLink to={LOCATIONS.PROJECTS}>
              Project
            </NavLink>
          </li>

          <li className={styles.NavItem}>
            <NavLink to={LOCATIONS.TEAM}>
              Team
            </NavLink>
          </li>

          <li className={styles.NavItem}>
            <NavLink to={LOCATIONS.CONTACT_US}>
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

Header.propTypes = {

};

export default memo(Header);
