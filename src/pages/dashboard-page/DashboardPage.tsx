import React from 'react';
import './DashboardPage.scss';
import { Outlet } from 'react-router-dom';
import SideNavigation from '../../components/side-navigation/SideNavigation';
import { Helmet } from 'react-helmet';

const DashboardPage = () => {

  return (
    <div className='test dashboard'>

      <Helmet>

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Dashboard | My Pilot Logbook</title>
        <meta name="description" content="My Pilot Logbook is the ultimate digital solution for pilots to track flight hours, routes, aircraft details, and more. Easily manage your flight logs and stay organized. Start logging today!" />
        <meta name="keywords" content="pilot logbook, digital logbook, flight logging, aviation logbook, logbook for pilots, flight tracking, pilot hours management, My Pilot Logbook" />

        <meta property="og:title" content="Dashboard | My Pilot Logbook" />
        <meta property="og:description" content="My Pilot Logbook is the ultimate digital solution for pilots to track flight hours, routes, aircraft details, and more. Easily manage your flight logs and stay organized. Start logging today!" />
        <meta property="og:image" content="https://res.cloudinary.com/dv9ax00l4/image/upload/v1723141068/logo-mplb_urrcoa.png" />
        <meta property="og:type" content="website" />
        
      </Helmet>

      <SideNavigation />
      <Outlet />
    </div>
  );

}

export default DashboardPage;