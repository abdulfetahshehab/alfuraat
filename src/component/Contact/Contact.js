
import React from 'react'
import "./contact.css"
import ContactLink from '../ReusableComp/ContactLink'

export default function Contact() {
  return (
    <div>
        <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                <h2>Contact</h2>
                <p>Contact Us</p>
                </div>

                <div className="row mt-3">
                    <ContactLink location="Head Office" address="Addis Ababa, Bole Rwanda Atlas Road Kelela bldg 4th floor office no 402" email="muhyamag@gmail.com /alfuraatplc@gmail.com" phoneNumber1="+251 912 454 444" PhoneNumber2="+251 924 148 729" />
                    <ContactLink location="Branch Office" address="Dire Dawa, Biftu Mall 3rd Floor" email="muhyamag@gmail.com" phoneNumber1="+251 252 119 090" PhoneNumber2="+251 936 195 154" />
                    <ContactLink location="Sales Office" address="Dire Dawa, Biftu Mall 3rd Floor and Merkato, Tesfa Bussinus Center 1st Floor No 01" email="alfuraatplc@gmail.com" phoneNumber1="+251 912 454 444" PhoneNumber2="+251 924 148 729" />
                </div>
            </div>
        </section>
    </div>
  )
}
