
import React from 'react'
import "./services.css"
import ServiceLink from '../ReusableComp/ServiceLink'

export default function Services() {
  return (
    <div>
        <section id="services" className="services">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                <h2>Services</h2>
                <p>Check our Services</p>
                </div>

                <div className="row">
                    <ServiceLink delay="100" ICN="bx bxl-dribbble" head="On Lighting Area" info="We provide grid power free system like" LCN="ri-checkbox-circle-fill" list1="Solar Power Station" list2="Solar Street and Traffic Light" list3="Solar Garden, Outdoor and Home Light" list4="Solar Flashlight" />

                    <ServiceLink delay="200" ICN="bx bx-file" head="On Agricalture and drinking area" info="We Install Solar based portable water pumping system for" LCN="ri-checkbox-indeterminate-fill" list1="Irrigation System" list2="Drinking Water" />

                    <ServiceLink delay="100" ICN="bx bx-world" head="On Promotion Area" info="We stanch solar system for any light based promotion and displays like" LCN="ri-chat-heart-fill" list1="Welcome Gate" list2="Billboard" list3="LED and 7 Segement Display" />

                </div>

            </div>
        </section>
    </div>
  )
}
