import React, {
  memo, useCallback,
} from 'react';
import { useSwiper } from 'swiper/react';

import nextSlide from 'assets/Images/Services/arrow-right.svg';

import styles from './ButtonNextSwiper.module.scss';

function ButtonNextSwiper() {
  const swiper = useSwiper();

  const onNextSlide = useCallback(() => {
    swiper.slideNext();
  }, [swiper]);

  return (
    <div
      className={`${styles.Btn} ${styles.Disable}`}
      role="button"
      tabIndex={0}
      onKeyDown={() => null}
      onClick={onNextSlide}
    >
      <img src={nextSlide} alt="Next Slide" />
    </div>
  );
}

ButtonNextSwiper.propTypes = {

};

export default memo(ButtonNextSwiper);
