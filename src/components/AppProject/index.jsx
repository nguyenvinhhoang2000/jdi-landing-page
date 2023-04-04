import React, { memo, useMemo } from 'react';
import PropTypes from 'prop-types';

import { CATEGORY_TYPE } from 'constants/index';

import { ReactComponent as CategoryIcon } from 'assets/Images/Icons/category-icon.svg';

import styles from './AppProject.module.scss';

function AppProject(props) {
  const {
    classes,
    filter,
    data,
  } = props;

  const projectFilter = useMemo(
    () => data.filter((item) => item.category === filter),
    [filter, data],
  );

  return (
    <div className={`${classes} ${styles.ProjectWrapper}`}>
      {projectFilter.map((item) => (
        <div key={item.id} className={`${styles.Project} ${filter === item.category ? '' : ''}`}>

          <div className={styles.BgOverlay}>
            <div className={styles.Img}>
              <img src={item.image} alt="Project" />
            </div>

          </div>

          <div className={styles.Content}>
            <div className={styles.Blur} />
            <div className={styles.Title}>
              {item.title}
            </div>

            <div className={styles.Decs}>
              {item.decs}
            </div>

            <div className={styles.Category}>
              <CategoryIcon className={styles.Icon} />

              {item.categoryLabel}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

AppProject.propTypes = {
  classes: PropTypes.string,
  filter: PropTypes.string,
  data: PropTypes.instanceOf(Object),
};

AppProject.defaultProps = {
  classes: '',
  filter: CATEGORY_TYPE.SOCIAL_FI,
  data: {},
};

export default memo(AppProject);
