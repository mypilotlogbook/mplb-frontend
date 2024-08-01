import React from 'react';
import './ContactPage.scss';
import ContactHero from '../../components/contact-hero/ContactHero';
import Footer from '../../components/footer/Footer';
import ContactHeader from '../../components/contact-header/ContactHeader';

const ContactPage = () => {
  return (
    <>
      <ContactHero />
      <ContactHeader />
      <Footer />
    </>
  )
}

export default ContactPage;