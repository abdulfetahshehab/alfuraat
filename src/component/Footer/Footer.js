import React from 'react'
import "./footer.css"

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">

            {/* Brand + Social */}
            <div className="col-lg-5">
              <div className="footer-info">
                <h3>Al-Furaat<span>.</span></h3>
                <p>
                  Designed & Developed by Abdulfetah Shehab
                </p>
                <div className="social-links mt-3">
                  <a 
                    href="https://abdulfetahshehab.github.io/ibnushehab.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="github"
                    title="Portfolio"
                  >
                    <i className="bx bxl-github"></i>
                  </a>

                  <a 
                    href="https://t.me/Abdul_fetah" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="telegram"
                    title="Telegram"
                  >
                    <i className="bx bxl-telegram"></i>
                  </a>

                  <a 
                    href="https://wa.me/251932173857" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="whatsapp"
                    title="WhatsApp"
                  >
                    <i className="bx bxl-whatsapp"></i>
                  </a>

         
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="col-lg-5 footer-links">
              <h4>Our Services</h4>
              <ul> 
                <li><i className="bx bx-chevron-right"></i> Front-End Web Development</li>
                <li><i className="bx bx-chevron-right"></i> Full-Stack Web Development</li>
                <li><i className="bx bx-chevron-right"></i> e-Commerce Web Development</li>
                <li><i className="bx bx-chevron-right"></i> Inventory Managment System</li>
                <li><i className="bx bx-chevron-right"></i> Documentation</li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container footer-bottom">
        <div className="copyright">
          &copy; {new Date().getFullYear()} <strong>Abdulfetah Shehab</strong>. All Rights Reserved.
        </div>

        <div className="contact-info">
          <span>
            <strong>Phone:</strong>{" "}
            <a href="tel:+251932173857">+251 932 173 857</a>
          </span>
          <span className="mx-3">|</span>
          <span>
            <strong>Email:</strong>{" "}
            <a href="mailto:abshehabece2@gmail.com">abshehabece2@gmail.com</a>
          </span>
        </div>
      </div>
    </footer>
  )
}