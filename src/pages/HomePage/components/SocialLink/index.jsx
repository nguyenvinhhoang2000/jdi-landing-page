import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import { LOCATIONS } from 'constants/index';

import { ReactComponent as FbIcon } from 'assets/Images/Icons/facebook.svg';
import { ReactComponent as LinkedInIcon } from 'assets/Images/Icons/linkedin.svg';
import { ReactComponent as TwitterIcon } from 'assets/Images/Icons/twitter.svg';
import { ReactComponent as TeleIcon } from 'assets/Images/Icons/telegram.svg';

import styles from './SocialLink.module.scss';

function SocialLink() {
  return (
    <div className={styles.Social}>
      <div className={styles.Line} />

      <Link
        className={styles.Icon}
        to={LOCATIONS.FACEBOOK}
        target="_blank"
      >
        <FbIcon />
      </Link>

      <Link
        className={styles.Icon}
        to={LOCATIONS.LINKED_IN}
        target="_blank"
      >
        <LinkedInIcon />
      </Link>

      <Link
        className={styles.Icon}
        to={LOCATIONS.TWITTER}
        target="_blank"
      >
        <TwitterIcon />
      </Link>

      <Link
        className={styles.Icon}
        to={LOCATIONS.TELEGRAM}
        target="_blank"
      >
        <TeleIcon />
      </Link>
    </div>
  );
}

SocialLink.propTypes = {

};

export default memo(SocialLink);
