import React from 'react';
import './AboutPage.scss';
import AboutHero from '../../components/about-hero/AboutHero';
import AboutSection from '../../components/about-section/AboutSection';
import FooterTop from '../../components/footer-top/FooterTop';
import Footer from '../../components/footer/Footer';
import { Helmet } from 'react-helmet';

const AboutPage = () => {

  return (
    <>
      <Helmet>

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>About My Pilot Logbook | Your Trusted Digital Flight Logging Partner</title>
        <meta name="description" content="Learn more about My Pilot Logbook, our mission to support pilots with an easy-to-use digital logbook, and our commitment to helping you streamline your flight records with ease." />
        <meta name="keywords" content="about My Pilot Logbook, digital pilot logbook, flight logging solutions, aviation record keeping, pilot flight management, logbook for pilots" />

        <meta property="og:title" content="About My Pilot Logbook | Your Trusted Digital Flight Logging Partner" />
        <meta property="og:description" content="Learn more about My Pilot Logbook, our mission to support pilots with an easy-to-use digital logbook, and our commitment to helping you streamline your flight records with ease." />
        <meta property="og:image" content="https://res.cloudinary.com/dv9ax00l4/image/upload/v1723141068/logo-mplb_urrcoa.png" />
        <meta property="og:type" content="website" />

      </Helmet>

      <AboutHero />
      <AboutSection />
      <FooterTop />
      <Footer />
    </>
  );
  
}

export default AboutPage;