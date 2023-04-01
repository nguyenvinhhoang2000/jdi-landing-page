import React, { memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { LOCATIONS } from 'constants/index';

import AppLink from 'components/AppLink';

import background from 'assets/Images/Services/bg_circle.svg';

import ButtonPrevSwiper from '../ButtonPrevSwiper';
import ButtonNextSwiper from '../ButtonNextSwiper';
import ServicesCard from '../ServicesCard';

import 'swiper/css';
import styles from './Services.module.scss';

function Services() {
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
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            loop
          >
            <SwiperSlide>
              <ServicesCard />
            </SwiperSlide>

            <SwiperSlide>
              <ServicesCard />
            </SwiperSlide>

            <SwiperSlide>
              <ServicesCard />
            </SwiperSlide>

            <SwiperSlide>
              <ServicesCard />
            </SwiperSlide>

            <SwiperSlide>
              <ServicesCard />
            </SwiperSlide>

            <ButtonPrevSwiper />
            <ButtonNextSwiper />
          </Swiper>
        </div>
      </div>
    </div>
  );
}

Services.propTypes = {

};

export default memo(Services);
