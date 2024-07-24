import React, { useState } from 'react';
import './SignInPage.scss';
import Logo from '../../components/logo/Logo';
import { Link, useNavigate } from 'react-router-dom';
import AuthHeader from '../../components/auth-header/AuthHeader';
import AuthSubHeader from '../../components/auth-subheader/AuthSubHeader';
import Lable from '../../components/lable/Lable';
import Textfield from '../../components/textfield/Textfield';
import AuthButton from '../../components/auth-button/AuthButton';
import Section from '../../components/section/Section';
import QuoteText from '../../components/quote-text/QuoteText';
import RoundedIcon from '../../components/rounded-icon/RoundedIcon';
import handleRegister from '../../api/user-endpoints/registerUser';
import Alert from '../../components/alert/Alert';
import LoadingPage from '../loading-page/LoadingPage';

const SignInPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [statusCode, setStatusCode] = useState(0);
    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    const handleEmail = (value: string) => {
      setEmail(value);
      console.log(value);
    }
    const handlePassword = (value: string) => {
      setPassword(value);
      console.log(value);
    }
    const resetCredentials = () => {
      setEmail('');
      setPassword('');
    }

    const handleSubmit = async () => {
      await handleRegister({
        email: email,
        password: password,      
        resetCredentials: resetCredentials,
        setError: setError,
        setLoading: setLoading,
        setStatusCode: setStatusCode,
        setMessage: setMessage,
        navigate: navigate
      });
    }
    
    return (
      <div className='test register-page'>
        <div className="test register-page-left">
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
            <QuoteText quote='Fulfilling a lifelong dream to'/>
            <QuoteText quote='become a successful pilot'/>
          </div>
        </div>
        <div className="test register-page-right">

          <div className="test register-page-right-inner">

            <div className='test logo-container'>
              <Link to='/'>
                <Logo />
              </Link> 
            </div>

            <AuthHeader title="New To Here ?"/>

            <Section marginBottom='20px' marginTop='20px'>
              <AuthSubHeader 
                message='Create a new account'
                color='#989898'
                textAlign='center'
              />
            </Section>

            <div className='test text-field-section'>
              <Lable title='Email'/>
              <Textfield 
                placeholder='Enter your email address'
                type='email'
                value={email}
                onChange={(value: string) => handleEmail(value)}
              />
            </div>
            
            <div className='test text-field-section'>
              <Lable title='Password'/>
              <Textfield 
                placeholder='Enter your password'
                type='password'
                value={password}
                onChange={(value: string) => handlePassword(value)}
              />
            </div>

            <AuthButton title='Register' backgroundColor='#000' textColor='#fff' onClick={handleSubmit}/>

            <Section marginTop='20px'></Section>
            <div className='test register-section'>
              <AuthSubHeader message='Already have an account ?' color='#000000' textAlign='center'/>
              <Link to='/login'>
                <AuthSubHeader message='Login' color='#359AE3' fontWeight={800} textAlign='center'/>
              </Link>
            </div>

            <Section marginTop='20px' marginBottom='10px'>
              <AuthSubHeader message='By signing up you agree to our Terms and Conditions and Privacy Policy.' color='#000000' textAlign='center'/>
            </Section>

            {
              loading && <LoadingPage />
            }

            {
              error && <Alert 
                message={message}
                statusCode={statusCode}
                type='error'
              />
            }

          </div>
        </div>
      </div>
    );

}

export default SignInPage;