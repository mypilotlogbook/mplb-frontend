import React from 'react';
import './ContactPage.scss';
import ContactHero from '../../components/contact-hero/ContactHero';
import Footer from '../../components/footer/Footer';
import ContactHeader from '../../components/contact-header/ContactHeader';
import ContactForm from '../../components/contact-form/ContactForm';

const ContactPage = () => {
  return (
    <>
      <ContactHero />
      <ContactHeader />
      <ContactForm />
      <Footer />
    </>
  )
}

export default ContactPage;