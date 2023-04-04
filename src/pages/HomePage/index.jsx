import React, { memo } from 'react';

import AboutUs from './components/AboutUs';
import Banner from './components/Banner';
import MeetOurAdvisors from './components/MeetOurAdvisors';
import MeetOurTeam from './components/MeetOurTeam';
import Partnerships from './components/Partnerships';
import Projects from './components/Projects';
import Services from './components/Services';

import styles from './HomePage.module.scss';

function HomePage() {
  return (
    <div className={styles.Home}>
      <Banner />

      <div className={styles.CircleBanner} />

      <Services />

      <AboutUs />

      <Projects />

      <Partnerships />

      <MeetOurTeam />

      <MeetOurAdvisors />

      <div className={styles.CircleAdvisor} />
    </div>
  );
}

HomePage.propTypes = {

};

export default memo(HomePage);
