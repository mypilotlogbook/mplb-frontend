import React, { useState } from 'react';
import './ChangePasswordPage.scss';
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

const ChangePasswordPage = () => {

  const [userEmail, setUserEmail] = useState('jeral.sandeeptha1@gmail.com');

  return (
    <div className='test changepassword-page'>
      <div className="test changepassword-page-left">
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
          <QuoteText quote='A deep-seated love for aviation'/>
          <QuoteText quote='and the desire to experience.'/>
        </div>
      </div>
      <div className="test changepassword-page-right">

        <div className="test changepassword-page-right-inner">

          <div className='test logo-container'>
            <Link to='/'>
              <Logo />
            </Link> 
          </div>

          <AuthHeader title="Change Password"/>

          <Section marginTop='20px'>
            <AuthSubHeader 
              message='Set a new password that’s long, strong, and'
              color='#989898'
              textAlign='center'
            />
          </Section>
          <AuthSubHeader 
            message='memorable. Like a good superhero movie.'
            color='#989898'
            textAlign='center'
          />

          <Section marginTop='10px' marginBottom='20px'>
            <AuthSubHeader 
              message={userEmail}
              color='#000000'
              fontWeight={800}
              textAlign='center'
            />
          </Section>

          <div className='test text-field-section'>
            <Lable title='Password'/>
            <Textfield 
              placeholder='Enter your new password'
              type='password'
              onChange={ () => {}}
            />
          </div>
          
          <div className='test text-field-section'>
            <Lable title='Confirm Password'/>
            <Textfield 
              placeholder='Enter your confirm password'
              type='password'
              onChange={ () => {}}
            />
          </div>

          <AuthButton title='Change Password' backgroundColor='#000' textColor='#fff' onClick={ () => {}}/>

        </div>
      </div>
    </div>
  )
}

export default ChangePasswordPage;