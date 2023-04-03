import React from 'react';
import PropTypes from 'prop-types';

import styles from './AppProject.module.scss';

function AppProject(props) {
  const { data } = props;
  console.log(data);
  return (
    <div className={styles.ProductWrapper}>
      <div className={styles.Product}>
        abc
      </div>
    </div>
  );
}

AppProject.propTypes = {
  data: PropTypes.instanceOf(Object),
};

AppProject.defaultProps = {
  data: {},
};

export default AppProject;
