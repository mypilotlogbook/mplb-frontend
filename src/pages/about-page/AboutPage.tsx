import React from 'react';
import './AboutPage.scss';
import AboutHero from '../../components/about-hero/AboutHero';
import AboutSection from '../../components/about-section/AboutSection';
import FooterTop from '../../components/footer-top/FooterTop';
import Footer from '../../components/footer/Footer';

const AboutPage = () => {

  return (
    <>
      <AboutHero />
      <AboutSection />
      <FooterTop />
      <Footer />
    </>
  );
  
}

export default AboutPage;