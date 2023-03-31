import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as JDILogo } from 'assets/Images/jdi-logo-footer.svg';
import { ReactComponent as FbIcon } from 'assets/Images/Icons/facebook.svg';
import { ReactComponent as LinkedInIcon } from 'assets/Images/Icons/linkedin.svg';
import { ReactComponent as TwitterIcon } from 'assets/Images/Icons/twitter.svg';
import { ReactComponent as TeleIcon } from 'assets/Images/Icons/telegram.svg';
import { ReactComponent as LocationIcon } from 'assets/Images/Icons/locationIcon.svg';
import { ReactComponent as MailIcon } from 'assets/Images/Icons/mail-icon.svg';
import { ReactComponent as BackgroundImg } from 'assets/Images/Footer/bg_circle.svg';

import { LOCATIONS } from 'constants/index';

import styles from './Footer.module.scss';

function Footer() {
  return (
    <div className={styles.FooterWrapper}>
      <BackgroundImg className={styles.BackgroundImg} />

      <div className={styles.Footer}>
        <div className={styles.Left}>
          <JDILogo className={styles.Logo} />

          <div className={styles.Content}>
            <div className={styles.Socials}>
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

            <div className={styles.Line} />

            <div className={styles.CopyRight}>
              © 2023 JDI Group. All Rights Reserved.
            </div>
          </div>
        </div>

        <div className={styles.Right}>
          <div className={styles.Nav}>
            <Link className={styles.NavItem} to={LOCATIONS.ABOUT_US}>
              Our Solutions
            </Link>

            <Link className={styles.NavItem} to={LOCATIONS.ABOUT_US}>
              Case Study
            </Link>

            <Link className={styles.NavItem} to={LOCATIONS.ABOUT_US}>
              About Us
            </Link>

            <Link className={styles.NavItem} to={LOCATIONS.ABOUT_US}>
              Our Team & Advisors
            </Link>

            <Link className={styles.NavItem} to={LOCATIONS.CONTACT_US}>
              Contact Us
            </Link>
          </div>

          <div className={styles.Location}>
            <div className={styles.LocationItem}>
              <div className={styles.Title}>
                <LocationIcon />

                <span>
                  Vietnam Office
                </span>
              </div>

              <div className={styles.Address}>
                F9, Maritime Building, 42 Tự Cường, W.4, Tân Bình, HCMC, Vietnam
              </div>
            </div>

            <div className={styles.LocationItem}>
              <div className={styles.Title}>
                <MailIcon />

                <span>
                  Contact
                </span>
              </div>

              <div className={styles.Address}>
                contact@onejdi.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Footer.propTypes = {

};

export default memo(Footer);
