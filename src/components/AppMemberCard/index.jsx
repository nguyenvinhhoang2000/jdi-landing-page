import React from 'react';
import PropTypes from 'prop-types';

import styles from './AppMemberCard.module.scss';

function AppMemberCard(props) {
  const {
    centerd,
    data,
  } = props;

  return (
    <div className={`${styles.Team} ${centerd ? styles.Centerd : ''}`}>
      <div className={styles.BgOverlay} />
      <div className={styles.Content}>
        <img className={styles.Img} src={data.image} alt={data.name} />

        <h1 className={styles.Name}>
          {data.name}
        </h1>

        <span className={styles.Role}>
          {data.role}
        </span>
      </div>
    </div>
  );
}

AppMemberCard.propTypes = {
  centerd: PropTypes.bool,
  data: PropTypes.instanceOf(Object),
};

AppMemberCard.defaultProps = {
  centerd: false,
  data: {},
};

export default AppMemberCard;
