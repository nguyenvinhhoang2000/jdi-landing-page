import React from 'react';
// import PropTypes from 'prop-types';

import { LOCATIONS } from 'constants/index';

import AppLink from 'components/AppLink';

import styles from './Projects.module.scss';

function Projects() {
  return (
    <div className={styles.ProjectWrapper}>
      <div className={styles.Project}>
        <AppLink classes={styles.Link} to={LOCATIONS.PROJECTS}>
          Case Study
        </AppLink>

        <h1>PROJECTS</h1>

        <soan>
          We are a highly flexible team that strives to meld
          our best practices with existing structures and
          processes of our clients.
        </soan>
      </div>
    </div>
  );
}

Projects.propTypes = {

};

export default Projects;
