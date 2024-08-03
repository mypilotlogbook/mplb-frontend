import React from 'react';
import './SideNavigation.scss';
import AuthSubHeader from '../auth-subheader/AuthSubHeader';
import NavigationLink from '../nav-link/NavigationLink';
import Section from '../section/Section';

const SideNavigation = () => {

    const mainNavLinks = [
        {
            id: 1,
            name: 'Overview',
            route: '/dashboard',
            iconName: 'https://res.cloudinary.com/dv9ax00l4/image/upload/v1722709010/house-chimney_xg1gnt.png'
        },
        {
            id: 2,
            name: 'Airfields',
            route: '/dashboard/airfields',
            iconName: 'https://res.cloudinary.com/dv9ax00l4/image/upload/v1722720943/court-sport_iigi2k.png'
        },
        {
            id: 3,
            name: 'Aircrafts',
            route: '/dashboard/aircrafts',
            iconName: 'https://res.cloudinary.com/dv9ax00l4/image/upload/v1722720942/plane-tail_sjd7cr.png'
        },
        {
            id: 4,
            name: 'Profile',
            route: '/dashboard/profile',
            iconName: 'https://res.cloudinary.com/dv9ax00l4/image/upload/v1722721063/clipboard-user_to770d.png'
        },
        {
            id: 5,
            name: 'Pilots',
            route: '/dashboard/pilots',
            iconName: 'https://res.cloudinary.com/dv9ax00l4/image/upload/v1722720942/user-pilot-tie_vwcvsd.png'
        },
        {
            id: 6,
            name: 'Flights',
            route: '/dashboard/flights',
            iconName: 'https://res.cloudinary.com/dv9ax00l4/image/upload/v1722720946/plane-alt_fabie8.png'
        },
        // {
        //     id: 1,
        //     name: 'Overview',
        //     route: '/dashboard',
        //     iconName: 'https://res.cloudinary.com/dv9ax00l4/image/upload/v1722709010/house-chimney_xg1gnt.png'
        // },
        // {
        //     id: 2,
        //     name: 'Airfields',
        //     route: '/dashboard/airfields',
        //     iconName: ''
        // },
        // {
        //     id: 3,
        //     name: 'Aircrafts',
        //     route: '/dashboard/aircrafts',
        //     iconName: ''
        // },
        // {
        //     id: 4,
        //     name: 'Profile',
        //     route: '/dashboard/profile',
        //     iconName: ''
        // },
    ]

    const otherNavLinks = [
        {
            id: 1,
            name: 'Settings',
            route: '/dashboard/settings',
            iconName: 'https://res.cloudinary.com/dv9ax00l4/image/upload/v1722720592/settings-sliders_ythfib.png'
        },
        {
            id: 2,
            name: 'Help Center',
            route: '/dashboard/help-center',
            iconName: 'https://res.cloudinary.com/dv9ax00l4/image/upload/v1722720593/seal-question_trckb0.png'
        },
    ]

    return (
        <div className='test side-navigation'>
            <div className="test nav-header">
                <img src="https://res.cloudinary.com/dv9ax00l4/image/upload/v1721331229/logo_xbmr4z.png" alt="logo" className="logo test" />
            </div>
            <div className="test nav-content">
                <div className="test content-section">
                    <AuthSubHeader message='MAIN MENU' color='gray'/>
                    <Section marginBottom='10px'/>
                    {
                        mainNavLinks.map((link) => {
                            return (
                                <NavigationLink 
                                    id={link.id}
                                    name={link.name}
                                    route={link.route}
                                    iconName={link.iconName}
                                />
                            )
                        })
                    }
                    <hr className='line'/>
                </div>
                <div className="test content-section">
                    <AuthSubHeader message='OTHER' color='gray'/>
                    <Section marginBottom='10px'/>
                    {
                        otherNavLinks.map((link) => {
                            return (
                                <NavigationLink 
                                    id={link.id}
                                    name={link.name}
                                    route={link.route}
                                    iconName={link.iconName}
                                />
                            )
                        })
                    }
                    <hr className='line'/>
                </div>
            </div>
            <div className="test nav-footer">
                <div className="test nav-footer-left">
                    <img src='https://res.cloudinary.com/dv9ax00l4/image/upload/v1722707589/profile-photo_lxgabd.avif' alt='profile-img' className="test profile-img" />
                </div>
                <div className="test nav-footer-right">
                    <h6 className="test name">Jeral Sandeeptha</h6>
                    <h6 className="test email">jeral.sandeeptha1@gmail.com</h6>
                </div>
            </div>
        </div>
    );
}

export default SideNavigation;