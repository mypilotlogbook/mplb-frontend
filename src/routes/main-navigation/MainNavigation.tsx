import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from '../../pages/landing-page/LandingPage';
import ContactPage from '../../pages/contact-page/ContactPage';
import AboutPage from '../../pages/about-page/AboutPage';
import NotFoundPage from '../../pages/notfound-page/NotFoundPage';
import PrivacyPolicyPage from '../../pages/privacy-policy-page/PrivacyPolicyPage';
import TermsAndConditionsPage from '../../pages/terms-and-condition-page/TermsAndConditionsPage';
import DashboardPage from '../../pages/dashboard-page/DashboardPage';
import ChangePasswordPage from '../../pages/change-password-page/ChangePasswordPage';
import ForgotPassword from '../../pages/forgot-password-page/ForgotPassword';
import SignInPage from '../../pages/signin-page/SignInPage';
import LoginPage from '../../pages/login-page/LoginPage';

const MainNavigation = () => {

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' Component={LandingPage}/>
            <Route path='/contact-us' Component={ContactPage}/>
            <Route path='/about-us' Component={AboutPage}/>
            <Route path='/login' Component={LoginPage}/>
            <Route path='/signin' Component={SignInPage}/>
            <Route path='/forgot-password' Component={ForgotPassword}/>
            <Route path='/change-password/:email' Component={ChangePasswordPage}/>
            <Route path='/terms-and-conditions' Component={TermsAndConditionsPage}/>
            <Route path='/privacy-policy' Component={PrivacyPolicyPage}/>
            <Route path='/dashboard' Component={DashboardPage}/>
            <Route path='*' Component={NotFoundPage}/>
        </Routes>
    </BrowserRouter>
  );

}

export default MainNavigation;
