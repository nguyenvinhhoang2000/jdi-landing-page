import React, { memo, useCallback, useState } from 'react';
// import PropTypes from 'prop-types';

import { CATEGORY_TYPE, LOCATIONS } from 'constants/index';

import AppCategory from 'components/AppCategory';
import AppProject from 'components/AppProject';
import AppLink from 'components/AppLink';

import img1 from 'assets/Images/Projects/project-1.png';
import img2 from 'assets/Images/Projects/project-2.png';
import img3 from 'assets/Images/Projects/project-3.png';
import img4 from 'assets/Images/Projects/project-4.png';
import img5 from 'assets/Images/Projects/project-5.png';
import img6 from 'assets/Images/Projects/project-6.png';

import styles from './Projects.module.scss';

const CATEGORY_LIST = [
  {
    id: 'SOCIAL_FI',
    label: 'SocialFi',
  },
  {
    id: 'DEFi',
    label: 'DEFi',
  },
  {
    id: 'BLOCKCHAIN_FOR_REAL',
    label: 'Blockchain for Real',
  },
  {
    id: 'GAME_FI',
    label: 'GameFi - MetaFi',
  },
  {
    id: 'AI',
    label: 'Ai',
  },
  {
    id: 'OTHERS',
    label: 'OTHERS',
  },
];

const PROJECT_LIST = [
  {
    id: '1',
    title: 'ReferReach',
    categoryLabel: 'SOCIALFI',
    category: CATEGORY_TYPE.SOCIAL_FI,
    image: img1,
    decs: 'Getdone is a blockchain-powered platform that helps clients Pay for talents or services from partners/ sellers in Cryptocurrencies securely & quickly via Smart Contract Solution.',
  },
  {
    id: '2',
    title: 'Getdone',
    categoryLabel: 'SOCIALFI',
    category: CATEGORY_TYPE.SOCIAL_FI,
    image: img2,
    decs: 'Getdone is a blockchain-powered platform that helps clients Pay for talents or services from partners/ sellers in Cryptocurrencies securely & quickly via Smart Contract Solution.',
  },
  {
    id: '3',
    title: 'Defily',
    categoryLabel: 'DEFi',
    category: CATEGORY_TYPE.SOCIAL_FI,
    image: img3,
    decs: 'Getdone is a blockchain-powered platform that helps clients Pay for talents or services from partners/ sellers in Cryptocurrencies securely & quickly via Smart Contract Solution.',
  },
  {
    id: '4',
    title: 'NanoReal',
    categoryLabel: 'Blockchain for Real',
    category: CATEGORY_TYPE.BLOCKCHAIN_FOR_REAL,
    image: img4,
    decs: 'Getdone is a blockchain-powered platform that helps clients Pay for talents or services from partners/ sellers in Cryptocurrencies securely & quickly via Smart Contract Solution.',
  },
  {
    id: '5',
    title: 'Life On Mars',
    categoryLabel: 'GameFi - MetaFi',
    category: CATEGORY_TYPE.GAME_FI,
    image: img5,
    decs: 'Getdone is a blockchain-powered platform that helps clients Pay for talents or services from partners/ sellers in Cryptocurrencies securely & quickly via Smart Contract Solution.',
  },
  {
    id: '6',
    title: 'LiveTrade',
    categoryLabel: 'DEFi',
    category: CATEGORY_TYPE.DEFI,
    image: img6,
    decs: 'Getdone is a blockchain-powered platform that helps clients Pay for talents or services from partners/ sellers in Cryptocurrencies securely & quickly via Smart Contract Solution.Getdone is a blockchain-powered platform that helps clients Pay for talents or services from partners/ sellers in Cryptocurrencies securely & quickly via Smart Contract Solution.',
  },
];

function Projects() {
  const [categoty, setCategory] = useState(CATEGORY_TYPE.SOCIAL_FI);

  const onClickCategory = useCallback((id) => () => {
    setCategory(id);
  }, []);

  return (
    <div className={styles.ProjectWrapper}>
      <div className={styles.Project}>
        <div className={styles.Content}>
          <AppLink classes={styles.Link} to={LOCATIONS.PROJECTS}>
            Case Study
          </AppLink>

          <h1 className={styles.Title}>PROJECTS</h1>

          <span className={styles.SubTitle}>
            We are a highly flexible team that strives to meld
            our best practices with existing structures and
            processes of our clients.
          </span>
        </div>

        <AppCategory
          selected={categoty}
          onClick={onClickCategory}
          data={CATEGORY_LIST}
        />

        <AppProject
          classes={styles.ProjectContainer}
          data={PROJECT_LIST}
          filter={categoty}
        />
      </div>
    </div>
  );
}

Projects.propTypes = {

};

export default memo(Projects);
