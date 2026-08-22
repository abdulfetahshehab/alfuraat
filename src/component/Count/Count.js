import React from 'react'
import "./count.css"

export default function Count() {
  return ( 
    <div>
        <section id="counts" className="counts mx-2">
        <div className="container" data-aos="fade-up">

            <div className="row no-gutters">
            <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start" data-aos="fade-right" data-aos-delay="100"></div>
            <div className="col-xl-7 ps-0 ps-lg-5 pe-lg-1 d-flex align-items-stretch" data-aos="fade-left" data-aos-delay="100">
                <div className="content d-flex flex-column justify-content-center">
                <h3>Al-Furrat Companies current status</h3>
                <p>
                    Alfuraat Solar Tech Manufacturing PLC has three international business partners with extensive experience in various solar products. Our workforce is well over 100 employees, including skilled engineers.                               </p>
                <div className="row">
                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                        <i className="bi bi-emoji-smile"></i>
                        <span data-purecounter-start="0" data-purecounter-end="250" data-purecounter-duration="2" className="purecounter"></span>
                        <p><strong>Happy Clients </strong>All Clients we meet during our work are more happy and pleased on our works.</p>
                    </div>
                    </div>

                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                        <i className="bi bi-journal-richtext"></i>
                        <span data-purecounter-start="0" data-purecounter-end="60" data-purecounter-duration="2" className="purecounter"></span>
                        <p><strong>Projects </strong>our project includes many sectors like solar light based sreet ligh, Traffic light and water pumping system</p>
                    </div>
                    </div>

                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                        <i className="bi bi-clock"></i>
                        <span data-purecounter-start="0" data-purecounter-end="7" data-purecounter-duration="2" className="purecounter"></span>
                        <p><strong>Years of experience </strong> AL-Furaat Solar Tech Manufacturing has 7 year experiance inb diferent sectors like street light, traffic light and water pumping system using solar</p>
                    </div>
                    </div>

                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                        <i className="bi bi-award"></i>
                        <span data-purecounter-start="0" data-purecounter-end="2" data-purecounter-duration="2" className="purecounter"></span>
                        <p><strong>Awards </strong>due to our quality and effective work we an awards from.......</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>

        </div>
        </section>
    </div>
  )
}
