import React from 'react';
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Carousel.scss';
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';

export const Slider = ({ slides }) => {
  return (
    <div>
      <Swiper
        modules={[Autoplay, Keyboard, Navigation, Pagination]}
        navigation={{
          nextEl: '#next-right',
          prevEl: '#prev-left',
        }}
        pagination={{
          type: 'fraction',
          clickable: true,
        }}
        breakpoints={{
          340: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 35,
          },
          1440: {
            slidesPerView: 3,
          },
        }}
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={52}
        loop={true}
        className="carousel"
        grabCursor
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img src={slide.image} alt={slide.title} />
            <div className="carousel-text">
              <h2 className="carousel-title">{slide.title}</h2>
              <p className="carousel-subtitle">{slide.text}</p>
            </div>
          </SwiperSlide>
        ))}

        <div className="carousel-nav">
          <button id="prev-left" />
          <button id="next-right" />
        </div>
      </Swiper>
    </div>
  );
};
