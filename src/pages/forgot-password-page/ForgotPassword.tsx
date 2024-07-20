import React from 'react';
import './ForgotPassword.scss';
import Logo from '../../components/logo/Logo';
import { Link } from 'react-router-dom';
import AuthHeader from '../../components/auth-header/AuthHeader';
import AuthSubHeader from '../../components/auth-subheader/AuthSubHeader';
import Lable from '../../components/lable/Lable';
import Textfield from '../../components/textfield/Textfield';
import AuthButton from '../../components/auth-button/AuthButton';
import Section from '../../components/section/Section';
import QuoteText from '../../components/quote-text/QuoteText';
import RoundedIcon from '../../components/rounded-icon/RoundedIcon';

const ForgotPassword = () => {

    return (
      <div className='test forgotpassword-page'>
        <div className="test forgotpassword-page-left">
          <div className='test top-content'>
            <RoundedIcon 
              image='https://res.cloudinary.com/dv9ax00l4/image/upload/v1721331226/community_krwrjo.png'
            />
            <div className='test logo-content'>
              <h3 className='logo-content-text'>Largest Student Pilot</h3>
              <h3 className='logo-content-text'>Community</h3>
            </div>
          </div>
          <div className='test bottom-content'>
            <h1 className='test quote'>"</h1>
            <QuoteText quote='The excitement of exploring'/>
            <QuoteText quote='new places from the sky'/>
          </div>
        </div>
        <div className="test forgotpassword-page-right">

          <div className="test forgotpassword-page-right-inner">

            <div className='test logo-container'>
              <Link to='/'>
                <Section marginBottom='30px'>
                  <Logo />
                </Section>
              </Link> 
            </div>

            <AuthHeader title="Forgot Password ?"/>

            <Section marginBottom='20px' marginTop='20px'>
              <AuthSubHeader 
                message='All good. Enter your account email address and we'
                color='#989898'
                textAlign='center'
              />
              <AuthSubHeader 
                message='will send you a link to reset your password.'
                color='#989898'
                textAlign='center'
              />
            </Section>
            
            <div className='test text-field-section'>
              <Lable title='Email'/>
              <Textfield 
                placeholder='Enter your reset email'
                type='email'
                onChange={ () => {}}
              />
            </div>

            <AuthButton title='Send reset link' backgroundColor='#000' textColor='#fff' onClick={ () => {}}/>

            <Section marginTop='40px' marginBottom='10px'>
              <Link to='/login'>
                <AuthSubHeader message='Back to login' color='#359AE3' textAlign='center' fontWeight={800}/>
              </Link>
            </Section>

          </div>
        </div>
      </div>
    );
}

export default ForgotPassword;