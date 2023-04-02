import React from 'react';

import AboutUs from './components/AboutUs';
import Banner from './components/Banner';
import Projects from './components/Projects';
import Services from './components/Services';

import styles from './HomePage.module.scss';

function HomePage() {
  return (
    <div className={styles.Home}>
      <Banner />

      <div className={styles.Circle} />

      <Services />

      <AboutUs />

      <Projects />

    </div>
  );
}

HomePage.propTypes = {

};

export default HomePage;
