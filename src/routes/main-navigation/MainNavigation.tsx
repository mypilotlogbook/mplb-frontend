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
            <Route path='/' element={<LandingPage />} />
            <Route path='/contact-us' element={<ContactPage />} />
            <Route path='/about-us' element={<AboutPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signin' element={<SignInPage />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />
            <Route path='/change-password/:userEmail' element={<ChangePasswordPage />} />
            <Route path='/terms-and-conditions' element={<TermsAndConditionsPage />} />
            <Route path='/privacy-policy' element={<PrivacyPolicyPage />} />
            <Route path='/dashboard' element={<DashboardPage />} />
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    </BrowserRouter>
  );

}

export default MainNavigation;
