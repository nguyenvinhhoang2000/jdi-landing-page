import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { CATEGORY_TYPE } from 'constants/index';

import styles from './AppCategory.module.scss';

function AppCategory(props) {
  const {
    data,
    selected,
    onClick,
  } = props;

  return (
    <div className={styles.CategoryWrapper}>
      {data.map((item) => (
        <div
          key={item.id}
          role="button"
          onKeyDown={() => null}
          tabIndex={0}
          onClick={onClick(item.id)}
          className={`${styles.Category} ${selected === item.id ? styles.Active : ''}`}
        >
          <div className={styles.Overlay}>
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}

AppCategory.propTypes = {
  data: PropTypes.instanceOf(Object),

  selected: PropTypes.string,

  onClick: PropTypes.func.isRequired,
};

AppCategory.defaultProps = {
  data: {},

  selected: CATEGORY_TYPE.SOCIAL_FI,
};

export default memo(AppCategory);
