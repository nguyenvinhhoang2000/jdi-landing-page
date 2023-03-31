import React, { memo } from 'react';

import { LOCATIONS } from 'constants/index';

import manImg from 'assets/Images/Banner/man.png';
import bgCircle from 'assets/Images/Banner/bg_circle.png';

import AppButton from 'components/AppButton';
import SocialLink from '../SocialLink';

import styles from './Banner.module.scss';

function Banner() {
  return (
    <div className={styles.BannerWrapper}>
      <img className={styles.BackgroundCircle} src={bgCircle} alt="background circle" />

      <img className={styles.BackgroundBanner} src={manImg} alt="background banner" />

      <div className={styles.Banner}>
        <SocialLink />

        <div className={styles.Content}>
          <div className={styles.Title}>
            <h1>
              TURNING GREAT IDEAS INTO
              {' '}
              <span className={styles.TextGradient1}>
                INNOVATIVE
              </span>

            </h1>

            <span className={styles.TextGradient2}>
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
              classes={styles.BtnAbout}
            >
              About Us
            </AppButton>

            <AppButton
              isLink
              outline
              to={LOCATIONS.ABOUT_US}
              classes={styles.BtnProject}
            >
              See Project
            </AppButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Banner);
