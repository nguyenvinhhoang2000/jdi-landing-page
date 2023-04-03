import React, { useCallback, useState } from 'react';
// import PropTypes from 'prop-types';

import { LOCATIONS } from 'constants/index';

import AppCategory from 'components/AppCategory';
import AppProject from 'components/AppProject';
import AppLink from 'components/AppLink';

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

function Projects() {
  const [categoty, setCategory] = useState('');

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

        <AppProject />
      </div>
    </div>
  );
}

Projects.propTypes = {

};

export default Projects;
