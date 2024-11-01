import React from 'react';
import './LandingPage.scss';
import HomeHero from '../../components/home-hero/HomeHero';
import Features from '../../components/features/Features';
import HeroVideo from '../../components/hero-video/HeroVideo';
import Explore from '../../components/explore/Explore';
import Footer from '../../components/footer/Footer';
import SubscriptionForm from '../../components/subscription-form/SubscriptionForm';
import { Helmet } from 'react-helmet';

const LandingPage = () => {
  return (
    <>
      <Helmet>

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>My Pilot Logbook | Simplify Your Flight Logging with Our Digital Logbook</title>
        <meta name="description" content="My Pilot Logbook is the ultimate digital solution for pilots to track flight hours, routes, aircraft details, and more. Easily manage your flight logs and stay organized. Start logging today!" />
        <meta name="keywords" content="pilot logbook, digital logbook, flight logging, aviation logbook, logbook for pilots, flight tracking, pilot hours management, My Pilot Logbook" />

        <meta property="og:title" content="My Pilot Logbook | Simplify Your Flight Logging with Our Digital Logbook" />
        <meta property="og:description" content="My Pilot Logbook is the ultimate digital solution for pilots to track flight hours, routes, aircraft details, and more. Easily manage your flight logs and stay organized. Start logging today!" />
        <meta property="og:image" content="https://res.cloudinary.com/dv9ax00l4/image/upload/v1723141068/logo-mplb_urrcoa.png" />
        <meta property="og:type" content="website" />
        
      </Helmet>

      <HomeHero />
      <Features />
      <HeroVideo />
      <Explore />
      <SubscriptionForm />
      <Footer />
    </>
  )
}

export default LandingPage;