import React from 'react';
import './ContactHero.scss';
import DownArrow from '../down-arrow/DownArrow';
import HeroFeature from '../hero-feature/HeroFeature';
import Section from '../section/Section';
import Navbar from '../navbar/Navbar';

const ContactHero = () => {

  return (
    <div className='test contact-hero'>
        <div className="test contact-hero-inner">
            <Navbar />

            <div className='test data-container'>
                <Section marginTop='50px' marginBottom='30px'>
                    <h2 className='test page-title'>CONTACT</h2>
                </Section>

                <Section marginBottom='40px' marginTop='30px'>
                    <h1 className='test title'>Let's start</h1>
                    <h1 className='test title'>talking.</h1>
                </Section>
            </div>

            <DownArrow />

            <HeroFeature />

        </div>
    </div>
  );

}

export default ContactHero;