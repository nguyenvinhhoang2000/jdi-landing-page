import React from 'react';

import { LOCATIONS } from 'constants/index';

import AppMemberCard from 'components/AppMemberCard';
import AppLink from 'components/AppLink';

import partner1 from 'assets/Images/Teams/partner-1.png';
import partner2 from 'assets/Images/Teams/partner-2.png';
import partner3 from 'assets/Images/Teams/partner-3.png';
import partner4 from 'assets/Images/Teams/partner-4.png';

import styles from './MeetOurTeam.module.scss';

const MEMBER_LIST = [
  {
    id: '1',
    name: 'George Nguyen',
    role: 'FOUNDER & Managing Partner',
    image: partner1,
  },
  {
    id: '2',
    name: 'Frank Lee',
    role: 'Managing Partner',
    image: partner2,
  },
  {
    id: '3',
    name: 'Trung Nguyen',
    role: 'Community Manager',
    image: partner3,
  },
  {
    id: '4',
    name: 'Sinh Ha',
    role: 'Solution Architect',
    image: partner4,
  },
];

function MeetOurTeam() {
  return (
    <div className={styles.TeamWrapper}>
      <div className={styles.CricleBlur} />

      <div className={styles.Team}>
        <AppLink
          size="md"
          to={LOCATIONS.TEAM}
          classes={styles.Link}
        >
          CORE TEAM
        </AppLink>

        <h1 className={styles.Title}>
          Meet Our Team
        </h1>

        <div className={styles.MemberWrapper}>
          {MEMBER_LIST.map((item) => (
            <AppMemberCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

MeetOurTeam.propTypes = {

};

export default MeetOurTeam;
