import React, {
  memo, useCallback, useEffect, useState,
} from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

import { LOCATIONS } from 'constants/index';

import logo from 'assets/Images/jdi-logo.png';

import styles from './Header.module.scss';

function Header() {
  const location = useLocation();

  // eslint-disable-next-line no-unused-vars
  const [isSticky, setIsSticky] = useState(false);
  const [isShowMenu, setIsShowMenu] = useState(false);

  // window.addEventListener('scroll', () => {
  //   const currentScroll = window.pageYOffset;

  //   if (currentScroll > 0) {
  //     setIsSticky(true);
  //   } else {
  //     setIsSticky(false);
  //   }
  // });

  const onCloseMenu = useCallback(() => {
    setIsShowMenu(false);
  }, []);

  const onOpenMenu = useCallback(() => {
    setIsShowMenu(true);
  }, []);

  useEffect(() => {
    setIsShowMenu(false);
  }, [location.hash]);

  return (
    <>
      <div className={styles.HeaderWrapper}>
        <div className={`${styles.Blur} ${isSticky ? styles.Show : ''}`} />

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

            <div
              role="button"
              tabIndex={0}
              onKeyDown={() => null}
              onClick={onOpenMenu}
              className={styles.Bars}
            >
              <span className={`${styles.IconMenu}`} />
            </div>
          </ul>
        </div>
      </div>

      {/* menu mobi */}
      <div className={`${styles.HeaderMobiWrapper} ${isShowMenu && styles.Active}`}>
        <div
          className={styles.Overlay}
          onKeyDown={() => null}
          tabIndex={0}
          role="button"
          onClick={onCloseMenu}
          aria-label="Close Menu"
        />

        <div className={styles.Menu}>
          <ul className={styles.MenuNav}>
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
    </>
  );
}

Header.propTypes = {

};

export default memo(Header);
