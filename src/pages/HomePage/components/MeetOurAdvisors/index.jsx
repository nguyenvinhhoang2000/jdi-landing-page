import React from 'react';

import { LOCATIONS } from 'constants/index';

import AppMemberCard from 'components/AppMemberCard';
import AppLink from 'components/AppLink';

import advisor1 from 'assets/Images/Advisors/advisor-1.png';
import advisor2 from 'assets/Images/Advisors/advisor-2.png';
import advisor3 from 'assets/Images/Advisors/advisor-3.png';

import styles from './MeetOurAdvisors.module.scss';

const MEMBER_LIST = [
  {
    id: '1',
    name: 'Kelly Choo',
    role: 'Blockchain Advisor',
    image: advisor1,
  },
  {
    id: '2',
    name: 'Kenneth Bok',
    role: 'Blockchain Advisor',
    image: advisor2,
  },
  {
    id: '3',
    name: 'Jackson Ng',
    role: 'Blockchain Advisor',
    image: advisor3,
  },
];

function MeetOurAdvisors() {
  return (
    <div className={styles.AdvisorWrapper}>
      <div className={styles.Advisor}>
        <AppLink
          size="md"
          to={LOCATIONS.TEAM}
          classes={styles.Link}
        >
          Advisors
        </AppLink>

        <h1 className={styles.Title}>
          Meet Our Advisors
        </h1>

        <div className={styles.MemberWrapper}>
          {MEMBER_LIST.map((item) => (
            <AppMemberCard key={item.id} centerd data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

MeetOurAdvisors.propTypes = {

};

export default MeetOurAdvisors;
