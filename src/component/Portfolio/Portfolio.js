
import React, { useState } from 'react';
import pump1 from "../../img/sample/panel_2.jpg";
import pump2 from "../../img/sample/site2.jpg";
import pump3 from "../../img/sample/site5.jpg";
import pump4 from "../../img/sample/handover.jpg";
import pump5 from "../../img/sample/controller_3.jpg";
import pump6 from "../../img/sample/pump.jpg";
import street1 from "../../img/sample/StreetBest.JPG";
import street2 from "../../img/sample/street.jpg";
import street3 from "../../img/sample/street_1.jpg";
import traffic1 from "../../img/sample/welcome_gate.jpg";
import traffic2 from "../../img/sample/gate.jpg";
import traffic3 from "../../img/sample/traffic.jpg";
import "./portfolio.css";

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  const portfolioItems = [
    // Water Pumps
    { id: 1, category: "water", image: pump1, title: "Panel" },
    { id: 2, category: "water", image: pump2, title: "Water Pump" },
    { id: 3, category: "water", image: pump3, title: "Site" },
    { id: 4, category: "water", image: pump4, title: "Handover" },
    { id: 5, category: "water", image: pump5, title: "Controller" },
    { id: 6, category: "water", image: pump6, title: "Pumping" },

    // Street Lights
    { id: 7, category: "street", image: street1, title: "Street 1" },
    { id: 8, category: "street", image: street2, title: "Street 2" },
    { id: 9, category: "street", image: street3, title: "Street 3" },

    // Traffic Lights
    { id: 10, category: "traffic", image: traffic1, title: "Welcome Gate" },
    { id: 11, category: "traffic", image: traffic2, title: "Welcome Gate" },
    { id: 12, category: "traffic", image: traffic3, title: "Traffic" },
  ];

  const filteredItems =
    filter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Works</h2>
          <p>Check our Works</p>
        </div>

        {/* Filter Buttons */}
        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li className={filter === "all" ? "filter-active" : ""}
                onClick={() => setFilter("all")}>All</li>
              <li className={filter === "street" ? "filter-active" : ""}
                onClick={() => setFilter("street")}>Street Light</li>
              <li className={filter === "water" ? "filter-active" : ""}
                onClick={() => setFilter("water")}>In Water</li>
              <li className={filter === "traffic" ? "filter-active" : ""}
                onClick={() => setFilter("traffic")}>Traffic Light</li>
            </ul>
          </div>
        </div>

        {/* Portfolio Items */}
        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
          {filteredItems.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6 portfolio-item">
              <div className="portfolio-wrap">
                <img src={item.image} className="img-fluid" alt={item.title} />
                <div className="portfolio-info">
                  <h4>{item.title}</h4>
                  <div className="portfolio-links">
                    <a href={item.image} target="_blank" rel="noreferrer" title={item.title}><i className="bx bx-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
                
       