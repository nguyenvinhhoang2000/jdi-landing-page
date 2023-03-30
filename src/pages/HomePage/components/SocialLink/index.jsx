import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import { LOCATIONS } from 'constants/index';

import { ReactComponent as FbIcon } from 'assets/Images/Socials/facebook.svg';
import { ReactComponent as LinkedInIcon } from 'assets/Images/Socials/linkedin.svg';
import { ReactComponent as TwitterIcon } from 'assets/Images/Socials/twitter.svg';
import { ReactComponent as TeleIcon } from 'assets/Images/Socials/telegram.svg';

import styles from './SocialLink.module.scss';

function SocialLink() {
  return (
    <div className={styles.Social}>
      <div className={styles.Line} />

      <Link to={LOCATIONS.FACEBOOK} target="_blank">
        <FbIcon className={styles.Icon} />
      </Link>

      <Link to={LOCATIONS.LINKED_IN} target="_blank">
        <LinkedInIcon className={styles.Icon} />
      </Link>

      <Link to={LOCATIONS.TWITTER} target="_blank">
        <TwitterIcon className={styles.Icon} />
      </Link>

      <Link to={LOCATIONS.TELEGRAM} target="_blank">
        <TeleIcon className={styles.Icon} />
      </Link>
    </div>
  );
}

SocialLink.propTypes = {

};

export default memo(SocialLink);
