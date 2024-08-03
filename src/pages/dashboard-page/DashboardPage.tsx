import React from 'react';
import './DashboardPage.scss';
import { Outlet } from 'react-router-dom';
import SideNavigation from '../../components/side-navigation/SideNavigation';

const DashboardPage = () => {

  return (
    <div className='test dashboard'>
      <SideNavigation />
      <Outlet />
    </div>
  );

}

export default DashboardPage;