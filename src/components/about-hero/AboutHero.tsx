import React from 'react';
import './AboutHero.scss';
import DownArrow from '../down-arrow/DownArrow';
import HeroFeature from '../hero-feature/HeroFeature';
import Section from '../section/Section';
import Navbar from '../navbar/Navbar';

const AboutHero = () => {

  return (
    <div className='test about-hero'>
        <div className="test about-hero-inner">
            <Navbar />

            <div className='test data-container'>
                <Section marginTop='50px' marginBottom='30px'>
                    <h2 className='test page-title'>ABOUT</h2>
                </Section>

                <Section marginBottom='40px' marginTop='30px'>
                    <h1 className='test title'>Find the service</h1>
                    <h1 className='test title'>to fit your logging.</h1>
                </Section>
            </div>

            <DownArrow />

            <HeroFeature page='ABOUT' message='EXPLORE WHO WE ARE'/>

        </div>
    </div>
  );

}

export default AboutHero;
