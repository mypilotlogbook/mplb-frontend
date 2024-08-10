import React, { useContext, useState } from 'react';
import './LoginPage.scss';
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
import loginUser from '../../api/user-endpoints/loginUser';
import LoadingPage from '../loading-page/LoadingPage';
import Alert from '../../components/alert/Alert';
import { TokenContext } from '../../context/TokenContext';
import { IdContext } from '../../context/UserIdContext';

const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [statusCode, setStatusCode] = useState(0);
    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    const tokenContext = useContext(TokenContext);
    const updateToken = tokenContext?.updateToken;
    if (!updateToken) {
      throw new Error('Token context is not available');
    } 
    const idContext = useContext(IdContext);
    const updateId = idContext?.updateId;
    if (!updateId) {
      throw new Error('Id context is not available');
    } 

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

    const handleLogin = () => {
      loginUser({
        email: email,
        password: password,      
        resetCredentials: resetCredentials,
        setError: setError,
        setLoading: setLoading,
        setStatusCode: setStatusCode,
        setMessage: setMessage,
        navigate: navigate,
        updateToken: updateToken,
        updateId: updateId
      });
    }

  return (
    <div className='test login-page'>
      <div className="test login-page-left">
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
          <QuoteText quote='Go anywhere you want in a'/>
          <QuoteText quote='Sky full of wonders!'/>
        </div>
      </div>
      <div className="test login-page-right">

        <div className="test login-page-right-inner">

          <div className='test logo-container'>
            <Link to='/'>
              <Logo />
            </Link> 
          </div>

          <AuthHeader title="Welcome Back!"/>

          <Section marginBottom='20px' marginTop='20px'>
            <AuthSubHeader 
              message='Please login to access to your account'
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
              onChange={handleEmail}
            />
          </div>
          
          <div className='test text-field-section'>
            <Lable title='Password'/>
            <Textfield 
              placeholder='Enter your password'
              type='password'
              value={password}
              onChange={handlePassword}
            />
          </div>

          <AuthButton title='Login' backgroundColor='#000' textColor='#fff' onClick={handleLogin}/>

          <Section marginTop='20px' marginBottom='10px'>
            <Link to='/forgot-password'>
              <AuthSubHeader message='Forgot Password?' color='#359AE3' textAlign='center' fontWeight={800}/>
            </Link>
          </Section>

          <div className='test register-section'>
            <AuthSubHeader message='Dont have an account ?' color='#000000' textAlign='center'/>
            <Link to='/signin'>
              <AuthSubHeader message='Register' color='#359AE3' fontWeight={800} textAlign='center'/>
            </Link>
          </div>

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
  )
}

export default LoginPage