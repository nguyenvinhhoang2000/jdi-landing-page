import React, {
  memo, useCallback, useEffect, useState,
} from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
import Swiper from 'swiper';

import { LOCATIONS } from 'constants/index';

import AppLink from 'components/AppLink';

import background from 'assets/Images/Services/bg_circle.svg';
import prevSlide from 'assets/Images/Services/arrow-left.svg';
import nextSlide from 'assets/Images/Services/arrow-right.svg';

import ServicesCard from '../ServicesCard';

import 'swiper/css';
import styles from './Services.module.scss';

function Services() {
  const [swiper, setSwiper] = useState(null);

  const handlePrev = useCallback(() => {
    if (swiper) {
      swiper.slidePrev();
    }
  }, [swiper]);

  const handleNext = useCallback(() => {
    if (swiper) {
      swiper.slideNext();
    }
  }, [swiper]);

  useEffect(() => {
    const swiperInstance = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });

    setSwiper(swiperInstance);
  }, []);

  return (
    <div className={styles.ServicesWrapper}>
      <img className={styles.Background} src={background} alt="background" />

      <div className={styles.Services}>
        <AppLink
          classes={styles.Link}
          to={LOCATIONS.SERVICES}
        >
          Our Solutions
        </AppLink>

        <div className={styles.Title}>
          Services
        </div>

        <div className={styles.Decs}>
          We produce bespoke solutions to help you make an impact
        </div>

        <div className={styles.Slider}>
          <div className={`${styles.Container} swiper-container`}>
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <ServicesCard />
              </div>

              <div className="swiper-slide">
                <ServicesCard />
              </div>

              <div className="swiper-slide">
                <ServicesCard />
              </div>

              <div className="swiper-slide">
                <ServicesCard />
              </div>

              <div className="swiper-slide">
                <ServicesCard />
              </div>

              <div className="swiper-slide">
                <ServicesCard />
              </div>

              <div className="swiper-slide">
                <ServicesCard />
              </div>
            </div>
          </div>

          <button className={styles.Prev} type="button" onClick={handlePrev}>
            <img src={prevSlide} alt="Next Slide" />
          </button>

          <button className={styles.Next} type="button" onClick={handleNext}>
            <img src={nextSlide} alt="Prev Slide" />
          </button>
        </div>
      </div>
    </div>
  );
}

Services.propTypes = {

};

export default memo(Services);
