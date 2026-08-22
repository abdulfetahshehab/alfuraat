
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './testimony.css';
import certficate1 from '../../img/certificate/certeficate.png';
import certficate2 from '../../img/certificate/certificate.jpg';

export default function Testimony() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container" data-aos="zoom-in">

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,          // 5 seconds
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          className="testimonials-slider"
        > 
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="testimonial-item">
              <img src={certficate1} className="testimonial-img" alt="Certificate 1" />
              <h3>Dire Dawa Administration City Manager Office</h3>
              <h4>Manager office</h4>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                The certificate given from D.D Administration to Al-Furaat Solar 
                Tech due to successful finishing of solar street light supply 
                and installation in Dire Dawa City
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="testimonial-item">
              <img src={certficate2} className="testimonial-img" alt="Certificate 2" />
              <h3>Dire Dawa Administration</h3>
              <h4>Administrator</h4>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                Acknowledgment and certificate given from Dire Dawa Administration 
                to Al-Furaat Company for his excellent contribution to the call made 
                by the administration following drought disaster in Borena
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
            </div>
          </SwiperSlide>

        </Swiper>

      </div>
    </section>
  );
}