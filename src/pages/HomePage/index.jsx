import React from 'react';

import Banner from './components/Banner';

import styles from './HomePage.module.scss';
import Services from './components/Services';

function HomePage() {
  return (
    <div className={styles.Home}>
      <Banner />

      <div className={styles.Circle} />

      <Services />

    </div>
  );
}

HomePage.propTypes = {

};

export default HomePage;
