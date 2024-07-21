import React from 'react';
import './HomeHero.scss';
import { Link } from 'react-router-dom';
import DownArrow from '../down-arrow/DownArrow';
import HeroFeature from '../hero-feature/HeroFeature';
import Navbar from '../navbar/Navbar';
import Section from '../section/Section';

const HomeHero = () => {

  return (
    <div className='test home-hero'>
        <div className="test home-hero-inner">
            <Navbar />

            <div className='test data-container'>
                <Section marginTop='50px' marginBottom='30px'>
                    <h2 className='test page-title'>HOME</h2>
                </Section>

                <Section marginBottom='40px' marginTop='30px'>
                    <h1 className='test title'>Let's start flying</h1>
                    <h1 className='test title'>and logging.</h1>
                </Section>

                <Link to='/signin' className='test cta-link'>
                    <button className='test cta'>
                        <h4 className="test cta-text">START JOURNEY</h4>
                    </button>
                </Link>
            </div>

            <DownArrow />

            <HeroFeature />

        </div>
    </div>
  );

}

export default HomeHero;