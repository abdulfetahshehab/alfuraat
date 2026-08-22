import React from 'react'
import muhya1 from "../../img/team/boss.jpg"
import muhya2 from "../../img/team/muhya.jpg"
import ali from "../../img/team/ali.jpg"
import group from "../../img/team/team_1.jpg"
import "./team.css"

export default function Team() {
  return (
    <div>   
        <section id="team" className="team">
        <div className="container" data-aos="fade-up">

            <div className="section-title">
            <h2>Team</h2>
            <p>Check our Team</p>
            </div>

            <div className="row">

            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="fade-up" data-aos-delay="100">
                <div className="member-img">
                    <img src={muhya1} className="img-fluid" alt=""/>
                    <div className="social">
                    <a href=""><i className="bi bi-twitter"></i></a>
                    <a href=""><i className="bi bi-facebook"></i></a>
                    <a href=""><i className="bi bi-instagram"></i></a>
                    <a href=""><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
                <div className="member-info">
                    <h4>Muhyedin Fakhrudin</h4>
                    <span>Chief Executive Officier</span>
                </div>
                </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="fade-up" data-aos-delay="200">
                <div className="member-img">
                    <img src={muhya2} className="img-fluid" alt=""/>
                    <div className="social">
                    <a href=""><i className="bi bi-twitter"></i></a>
                    <a href=""><i className="bi bi-facebook"></i></a>
                    <a href=""><i className="bi bi-instagram"></i></a>
                    <a href=""><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
                <div className="member-info">
                    <h4>Muhyedin Fakhrudin</h4>
                    <span>Director</span>
                </div>
                </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="fade-up" data-aos-delay="300">
                <div className="member-img">
                    <img src={ali} className="img-fluid" alt=""/>
                    <div className="social">
                    <a href=""><i className="bi bi-twitter"></i></a>
                    <a href=""><i className="bi bi-facebook"></i></a>
                    <a href=""><i className="bi bi-instagram"></i></a>
                    <a href=""><i className="bi bi-linkedin"></i></a>
                    </div> 
                </div>
                <div className="member-info">
                    <h4>Ali Fakhrudin</h4>
                    <span>Senior Electrical Engineer</span>
                </div>
                </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="fade-up" data-aos-delay="400">
                <div className="member-img">
                    <img src={group} className="img-fluid" alt=""/>
                    <div className="social">
                    <a href=""><i className="bi bi-twitter"></i></a>
                    <a href=""><i className="bi bi-facebook"></i></a>
                    <a href=""><i className="bi bi-instagram"></i></a>
                    <a href=""><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
                <div className="member-info">
                    <h4>Members</h4>
                    <span>Engineers</span>
                </div>
                </div>
            </div>

            </div>

        </div>
        </section>
    </div>
  )
}
