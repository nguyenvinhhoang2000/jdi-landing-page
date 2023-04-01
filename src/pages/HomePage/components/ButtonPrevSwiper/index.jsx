import React, {
  memo, useCallback,
} from 'react';
import { useSwiper } from 'swiper/react';

import prevSlide from 'assets/Images/Services/arrow-left.svg';

import styles from './ButtonPrevSwiper.module.scss';

function ButtonPrevSwiper() {
  const swiper = useSwiper();

  const onPrevSlide = useCallback(() => {
    swiper.slidePrev();
  }, [swiper]);

  return (
    <div
      className={`${styles.Btn} ${styles.Disable}`}
      role="button"
      tabIndex={0}
      onKeyDown={() => null}
      onClick={onPrevSlide}
    >
      <img src={prevSlide} alt="Prev Slide" />
    </div>
  );
}

ButtonPrevSwiper.propTypes = {

};

export default memo(ButtonPrevSwiper);
