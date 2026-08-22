
import React, { useEffect } from 'react';
import Header from "./component/header/Header"
import Hero from "./component/Hero/Hero"
import About from "./component/About/About"
import Features from "./component/Features/Features"
import Services from "./component/Sevices/Services"
import Portfolio from "./component/Portfolio/Portfolio"
import Count from "./component/Count/Count"
import Testimony from "./component/Testimony/Testimony"
import Team from "./component/Team/Team"
import Contact from "./component/Contact/Contact"
import Footer from "./component/Footer/Footer"

import "./style/style.css"
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
    useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
      mirror: true,
    });
    
    // Refresh after a short delay
  const timer = setTimeout(() => {
    AOS.refresh();
  }, 500);

  return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Features/>
      <Services/>
      <Portfolio/>
      <Count/>
      <Testimony/>
      <Team/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
