import React, { memo } from 'react';
import PropTypes from 'prop-types';

import styles from './AppProjectCard.module.scss';

function AppProjectCard(props) {
  const {

    data,
  } = props;
  console.log(data);

  return (
    <div
      className={styles.Card}
    />
  );
}

AppProjectCard.propTypes = {
  data: PropTypes.instanceOf(Object),
};

AppProjectCard.defaultProps = {
  data: '',
};

export default memo(AppProjectCard);
