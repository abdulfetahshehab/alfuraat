
import React from 'react'
import value from "../../img/feature/alfur5.jpg"
import mission from "../../img/feature/mission.jpg"
import goal from "../../img/feature/plan.jpg"
import vision from "../../img/feature/vision.jpg"
import "./features.css"
import FeaturesLink from '../ReusableComp/FeaturesLink'

export default function Features() {
  return (

        <section id="features" className="features">

            <div className="container">
 
                <div className="section-title pt-5 justify-content-center myfeature" data-aos="fade-up">
                <h2>Features</h2>
                <h5 >The company has many features regarding to developing and modernizing our country by participating in different sectors</h5>
                </div>

                <div className="row">
                    <FeaturesLink 
                    head="Our Mission" 
                    info="To deliver high quality green energy product to every household and make this country Air-pollution free as much as posible." 
                    images={mission}
                    animation="fade-right"
                    delay="100"/>
                    <FeaturesLink head="Our Goal" info="Our goal is to make our country clean and healthy by delivering our high-quality and anti-pollution solar products to every home and every necessary institution" images={goal} animation="fade-left" delay="200" />
                    <FeaturesLink head="Our Vission" info="Being a leading importer and exporter and building a reliable and sustainable service provider institution and to serve the community sincerely." images={vision} animation="zoom-in" delay="100" />
                    <div className="col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="200">
                        <div className="card" style={{backgroundImage:`url(${value})`}}>
                        <div className="card-body">
                            <h5 className="card-title">Our Value</h5>
                            <p className="card-text">
                            <div className="text-black ">
                                <ul> 
                                <li ><i className="ri-checkbox-multiple-fill"></i> Priority for our community </li>
                                <li ><i className="ri-checkbox-multiple-fill"></i> Research and Innovation based</li>
                                <li ><i className="ri-checkbox-multiple-fill"></i> Customer oriented </li>
                                <li ><i className="ri-checkbox-multiple-fill"></i> Creating Safe, clean and healthy environment </li>
                                <li ><i className="ri-checkbox-multiple-fill"></i> Quality oriented and reliable</li>
                                </ul>
                            </div>
                            </p>
                        </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>
  )
}
