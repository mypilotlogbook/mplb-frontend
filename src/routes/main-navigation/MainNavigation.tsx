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
import Airfields from '../../pages/airfields/Airfields';
import Overview from '../../pages/overview/Overview';
import Settings from '../../pages/settings/Settings';
import HelpCenter from '../../pages/help-center/HelpCenter';
import Profile from '../../pages/profile/Profile';
import Aircarfts from '../../pages/aircrafts/Aircarfts';
import Pilots from '../../pages/pilots/Pilots';
import Flights from '../../pages/flights/Flights';
import SingleAirfield from '../../pages/single-airfield/SingleAirfield';
import AddAircraft from '../../pages/add-aircraft/AddAircraft';
import SingleAircraft from '../../pages/single-aircraft/SingleAircraft';
import AddPilot from '../../pages/add-pilot/AddPilot';
import SinglePilot from '../../pages/single-pilot/SinglePilot';
import AnalyticsPage from '../../pages/analytics-page/AnalyticsPage';
import AddFlight from '../../pages/add-flight/AddFlight';

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
            <Route path='/dashboard' element={<DashboardPage />}>
              <Route path='' element={<Overview />}/>
              <Route path='airfields' element={<Airfields />}/>
              <Route path='aircrafts' element={<Aircarfts />}/>
              <Route path='aircraft/:aircraftId' element={<SingleAircraft />}/>
              <Route path='aircraft/add-aircraft' element={<AddAircraft />}/>
              <Route path='profile' element={<Profile />}/>
              <Route path='settings' element={<Settings />}/>
              <Route path='help-center' element={<HelpCenter />}/>
              <Route path='pilots' element={<Pilots />}/>
              <Route path='pilot/add-pilot' element={<AddPilot />}/>
              <Route path='pilot/:pilotId' element={<SinglePilot />}/>
              <Route path='flights' element={<Flights />}/>
              <Route path='flight/add-flight' element={<AddFlight />}/>
              <Route path='airfield/:airfieldId' element={<SingleAirfield />}/>
              <Route path='analytics' element={<AnalyticsPage />}/>
            </Route>
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    </BrowserRouter>
  );

}

export default MainNavigation;
