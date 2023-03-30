import React from 'react';

import { LOCATIONS } from 'constants/index';

import AppButton from 'components/AppButton';
import SocialLink from './components/SocialLink';

import styles from './HomePage.module.scss';

function HomePage() {
  return (
    <div className={styles.HomeWrapper}>
      <div className={styles.Home}>
        <SocialLink />

        <div className={styles.Content}>
          <div className={styles.Title}>
            <h1>
              TURNING GREAT IDEAS INTO
              {' '}
              <span className={styles.TextGradient}>
                INNOVATIVE
              </span>

            </h1>

            <span className={styles.TextGradient}>
              SOLUTIONS
            </span>
          </div>

          <span className={styles.SubTitle}>
            We create works that revolutionize the way people think and work
          </span>

          <div className={styles.Btn}>
            <AppButton
              isLink
              to={LOCATIONS.ABOUT_US}
            >
              About Us
            </AppButton>
          </div>
        </div>
      </div>
    </div>
  );
}

HomePage.propTypes = {

};

export default HomePage;
