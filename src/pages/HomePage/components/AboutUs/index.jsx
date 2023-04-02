import React, { memo } from 'react';

import { LOCATIONS } from 'constants/index';

import AppLink from 'components/AppLink';

import ImgAbout from 'assets/Images/AboutUs/man.png';
import BgAbout from 'assets/Images/AboutUs/background-man.png';

import styles from './AboutUs.module.scss';

function AboutUs() {
  return (
    <div className={styles.AboutWrapper}>
      <div className={styles.About}>
        <div className={styles.ImgWrapper}>
          <img className={styles.Background} src={BgAbout} alt="Background" />

          <img className={styles.Img} src={ImgAbout} alt="Img" />
        </div>

        <div className={styles.Content}>
          <AppLink
            to={LOCATIONS.ABOUT_US}
            classes={styles.Link}
          >
            GET TO KNOW
          </AppLink>

          <h1>
            ABOUT US
          </h1>

          <span className={styles.SubTitle}>
            We Design, Code, and Ship Beautiful Software
          </span>

          <span className={styles.Decs}>
            JDI ONE is an Innovation Lab empowering entrepreneurs,
            startups, SMEs, and corporate ventures, to design, build,
            and scale their Innovation vision.

            <br />
            <br />

            In Web3, we have been building DeFi, GameFi and Metaverse platforms.
            Many of our projects have proceeded to raise multi-million dollars of investments.

            <br />
            <br />

            We partner with a network of security audit partners to
            ensure the security of our projects.

            <br />
            <br />

            In AI, we built
            {' '}
            <a href="https://voicegpt.us/" target="blank">https://voicegpt.us/</a>
            {' '}
            and other meaningful AI-related projects for corporations.

            <br />
            <br />

            We are constantly looking out for forward-looking
            companies and founders, to start new journeys of disruptive innovations.
          </span>
        </div>
      </div>
    </div>
  );
}

AboutUs.propTypes = {

};

export default memo(AboutUs);
