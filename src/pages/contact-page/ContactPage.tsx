import React from 'react';
import './ContactPage.scss';
import ContactHero from '../../components/contact-hero/ContactHero';
import Footer from '../../components/footer/Footer';
import ContactHeader from '../../components/contact-header/ContactHeader';
import ContactForm from '../../components/contact-form/ContactForm';
import { Helmet } from 'react-helmet';

const ContactPage = () => {
  return (
    <>
      <Helmet>

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Contact Us | My Pilot Logbook - Support and Inquiries</title>
        <meta name="description" content="Have questions about My Pilot Logbook? Reach out to us for support, feedback, or general inquiries. We're here to help you make the most of our digital logbook for pilots." />
        <meta name="keywords" content="contact My Pilot Logbook, logbook support, aviation logbook inquiries, pilot logbook questions, pilot support, My Pilot Logbook help" />

        <meta property="og:title" content="Contact Us | My Pilot Logbook - Support and Inquiries" />
        <meta property="og:description" content="Have questions about My Pilot Logbook? Reach out to us for support, feedback, or general inquiries. We're here to help you make the most of our digital logbook for pilots." />
        <meta property="og:image" content="https://res.cloudinary.com/dv9ax00l4/image/upload/v1723141068/logo-mplb_urrcoa.png" />
        <meta property="og:type" content="website" />

      </Helmet>
      
      <ContactHero />
      <ContactHeader />
      <ContactForm />
      <Footer />
    </>
  )
}

export default ContactPage;