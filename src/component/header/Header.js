import React, { useState } from 'react';
import logo from "../../img/slide/logo.jpg";
import "./header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setOpenDropdown(null);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center justify-content-between">

        <h1 className="logo me-auto me-lg-0">
          Al-Furaat
        </h1>

        {/* Desktop Navigation */}
        <nav className="navbar d-none d-lg-flex">
          <ul>
            <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
            <li><a className="nav-link scrollto" href="#about">About</a></li>
            <li><a className="nav-link scrollto" href="#services">Products</a></li>
            <li><a className="nav-link scrollto" href="#portfolio">Works</a></li>
            <li><a className="nav-link scrollto" href="#team">Team</a></li>
            <li className="dropdown">
              <a href="#"><span>More</span> <i className="bi bi-chevron-down"></i></a>
              <ul>
                <li><a href="#">Street Light</a></li>
                <li className="dropdown">
                  <a href="#"><span>Lighting For</span> <i className="bi bi-chevron-right"></i></a>
                  <ul>
                    <li><a href="#">Residential</a></li>
                    <li><a href="#">Hotel</a></li>
                    <li><a href="#">Office</a></li>
                    <li><a href="#">Center</a></li>
                  </ul>
                </li>
                <li><a href="#">Irrigation</a></li>
                <li><a href="#">Water Pumping</a></li>
                <li><a href="#">Traffic Light</a></li>
              </ul>
            </li>
            <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
          </ul>
        </nav>
        <a href="/" className="logo ">
          <img src={logo} alt="Al-Furaat Logo" className="img-fluid" style={{ maxHeight: "45px" }} />
        </a>
        {/* Mobile Toggle Button */}
        <button className="mobile-nav-toggle d-lg-none" onClick={toggleMenu}>
          <i className={`bi ${isOpen ? "bi-x" : "bi-list"}`}></i>
        </button>

      </div>

      {/* ========== Mobile Menu ========== */}
      <div className={`mobile-nav ${isOpen ? "active" : ""}`}>
        <ul>
          <li><a href="#hero" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#services" onClick={closeMenu}>Products</a></li>
          <li><a href="#portfolio" onClick={closeMenu}>Works</a></li>
          <li><a href="#team" onClick={closeMenu}>Team</a></li>

          {/* Dropdown */}
          <li className="mobile-dropdown">
            <a href="#" onClick={(e) => { e.preventDefault(); toggleDropdown("more"); }}>
              More <i className={`bi ${openDropdown === "more" ? "bi-chevron-up" : "bi-chevron-down"}`}></i>
            </a>
            <ul className={openDropdown === "more" ? "show" : ""}>
              <li><a href="#" onClick={closeMenu}>Street Light</a></li>

              {/* Nested Dropdown */}
              <li className="mobile-dropdown">
                <a href="#" onClick={(e) => { e.preventDefault(); toggleDropdown("lighting"); }}>
                  Lighting For <i className={`bi ${openDropdown === "lighting" ? "bi-chevron-up" : "bi-chevron-right"}`}></i>
                </a>
                <ul className={openDropdown === "lighting" ? "show" : ""}>
                  <li><a href="#" onClick={closeMenu}>Residential</a></li>
                  <li><a href="#" onClick={closeMenu}>Hotel</a></li>
                  <li><a href="#" onClick={closeMenu}>Office</a></li>
                  <li><a href="#" onClick={closeMenu}>Center</a></li>
                </ul>
              </li>

              <li><a href="#" onClick={closeMenu}>Irrigation</a></li>
              <li><a href="#" onClick={closeMenu}>Water Pumping</a></li>
              <li><a href="#" onClick={closeMenu}>Traffic Light</a></li>
            </ul>
          </li>

          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </div>
    </header>
  );
}