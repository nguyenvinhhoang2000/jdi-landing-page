import React from 'react';

import Banner from './components/Banner';

import styles from './HomePage.module.scss';

function HomePage() {
  return (
    <div className={styles.Home}>
      <Banner />

      <div className={styles.Circle} />

    </div>
  );
}

HomePage.propTypes = {

};

export default HomePage;
