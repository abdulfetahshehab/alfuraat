
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import slide1 from "../../img/slide/alf3.jpg"
import slide2 from "../../img/slide/s1.jpg"
import slide3 from "../../img/slide/site2.jpg"
import "./hero.css"
 
export default function Hero() {
  return (
    <section id="hero">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        className="hero-swiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="carousel-item-content" style={{ backgroundImage: `url(${slide2})` }}>
            <div className="carousel-container">
              <div className="carousel-content">
                <h2>Welcome to <span>Al-Furaat Solar Tech Manufacturing</span></h2>
                <p>
                  Alfuraat Solar Tech Manufacturing PLC is a reputable institution established in 2016.
                  Which specialize in the manufacturing, installing and assembly of various solar products.
                  It is an institution that has received the International Lighting Global Quality Certificate.
                </p>
                <div className="text-center">
                  <a href="#about" className="btn-get-started">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="carousel-item-content" style={{ backgroundImage: `url(${slide1})` }}>
            <div className="carousel-container">
              <div className="carousel-content">
                <h2>Welcome to <span>Al-Furaat Solar Tech Manufacturing</span></h2>
                <p>
                  Al Furaat Solar Tech Manufacturing PLC has accumulated a vast experience in the supply and installation of solar traffic lights, solar water pumps, and manufacturing of durable European standard solar-powered solutions since 2016.
                </p>
                <div className="text-center">
                  <a href="#about" className="btn-get-started">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="carousel-item-content" style={{ backgroundImage: `url(${slide3})` }}>
            <div className="carousel-container">
              <div className="carousel-content">
                <h2>Welcome to <span>Al-Furaat Solar Tech Manufacturing</span></h2>
                <p>
                  The products produced by our company are unique because they are of reliable quality and reasonable price.
                  Besides, they are manufactured according to European standards, making us the leading solar manufacturer.
                </p>
                <div className="text-center">
                  <a href="#about" className="btn-get-started">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
