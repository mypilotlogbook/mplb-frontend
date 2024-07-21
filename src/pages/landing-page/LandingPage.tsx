import React from 'react';
import './LandingPage.scss';
import HomeHero from '../../components/home-hero/HomeHero';
import Features from '../../components/features/Features';
import HeroVideo from '../../components/hero-video/HeroVideo';
import Explore from '../../components/explore/Explore';

const LandingPage = () => {
  return (
    <>
      <HomeHero />
      <Features />
      <HeroVideo />
      <Explore />
    </>
  )
}

export default LandingPage;