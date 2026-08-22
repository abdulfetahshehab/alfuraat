
import React from 'react'
import panel from "../../img/slide/panel_4.jpg"
import value from "../../img/feature/alfur5.jpg"

export default function About() {
  return (
    <div>
        <section id="about" className="about">
        <div className="container" data-aos="fade-up">
            <div className="row">
            <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                <img src={panel} className="img-fluid" alt=""/>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay="100">
                <h3>About Al-Furaat Company</h3>
                <p className="fst-italic">
                Established in 2016, it is pioneer in manufacturing durable & affordable European standard Solar-powered solutions and leading solar manufacturers in the entire Ethiopia.
                Al-Furaat is one of the biggest and on growing company in Ethiopia which participate in different section of area which have more sketch on developing and modernizing our country. Al-Furaat companies work has many factors for our conuntry in different veiws like...</p>
                <ul>
                <li><i className="ri-check-double-line"></i> Modernizing our country</li>
                <li><i className="ri-check-double-line"></i> Reducing electric power utilities</li>
                <li><i className="ri-check-double-line"></i> providing pure water for rular areas which an electric power does not reach</li>
                </ul>
            </div>
            </div>

        </div>
        <div className="container" data-aos="fade-up">
            <div className="row">
            <div className="col-lg-6 mb-3" data-aos="fade-right" data-aos-delay="200">
                <img src={value} className="img-fluid" alt=""/>
            </div>

            <div className="col-lg-6 " data-aos="fade-left" data-aos-delay="100">
                <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
                <i className="bx bx-images"></i>
                <h4>Al-Furaat Solar Tech Manufacturing</h4>
                <p>Al-Furaat Solar Tech Manufacturing compony works on any solar based projects like Traffic Light, Street Light, Irrigation, Water Pumping etc</p>
                <p>Al-Furaat Solar Tech Manufacturing compony has two sister companies</p>
                </div>
                <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
                <i className="bx bx-cube-alt"></i>
                <h4>Sun In Night</h4>
                <p>Sun in Night is the company which work in constraction area by delivering gravel/Cobbles in diferent size.</p>
                </div>
                <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
                <i className="bx bx-shield"></i>
                <h4>Soda King Iodized Salt</h4>
                <p>Soda King is a company that provide iodized pure salt for the customer in adequate price.</p>
                </div>
            </div>
            </div>

        </div>
        </section>
    </div>
  )
}
