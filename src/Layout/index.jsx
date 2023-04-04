import React, { memo } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from './Footer';
import Header from './Header';

import styles from './Layout.module.scss';

function Layout() {
  return (
    <div className={styles.Layout}>
      <Header />

      <div className={styles.Container}>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

Layout.propTypes = {

};

export default memo(Layout);
