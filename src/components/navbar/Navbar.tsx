import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.scss';
import gsap from 'gsap';

const Navbar = () => {

    const navigate = useNavigate();

    const tl = useRef(gsap.timeline({ paused: true }));

    useEffect(() => {
        tl.current.to('.nav-menu', { x: 0, duration: 0.5, ease: 'power1.inOut' })
                  .to('.nav-menu-links', { delay: 0.2, opacity: 1, duration: 0.5, ease: 'power1.inOut' })
                  .to('.link', { delay: 0.2, x: 0, opacity: 1, duration: 0.5, ease: 'power1.inOut', stagger: 0.2 });
    }, []);

    const openNav = () => {
         tl.current.play();
    };

    const closeNav = () => {
        tl.current.reverse();
    };

    const logIn = () => {
        closeNav();
        navigate('/login');
    }

    const signIn = () => {
        closeNav();
        navigate('/signin');
    }

  return (
    <div className='test navbar'>
        <div className="test navbar-left">
            <Link to='/' className='test logo-link'>
                <img src="https://res.cloudinary.com/dv9ax00l4/image/upload/v1721331229/logo_xbmr4z.png" alt="logo" className="test logo" />
            </Link>
        </div>
        <div className="test navbar-right">
            <button className='test menu-icon' onClick={openNav} aria-label="Open menu">
                <img src="https://res.cloudinary.com/dv9ax00l4/image/upload/v1721331226/hamburger_qgtsvq.png" alt="menu-icon-logo" />
            </button>
        </div>

        <div className="test nav-menu">
            <div className='test nav-menu-links'>
                <div className="test nav-menu-links-top">
                    <div className="links">
                        <Link to='/' className='test link'>Home</Link>
                        <Link to='/contact-us' className='test link'>Contact</Link>
                        <Link to='/about-us' className='test link'>About</Link>
                    </div>
                    <button className="test close-logo" onClick={closeNav} aria-label="Close menu">
                        <img src="https://res.cloudinary.com/dv9ax00l4/image/upload/v1721331225/close_q1u3je.png" alt="close-logo" />
                    </button>
                </div>
                <div className="test nav-menu-links-bottom">
                    <button className='test nav-cta-button signin' onClick={signIn}>SIGN IN</button>
                    <button className='test nav-cta-button login' onClick={logIn}>LOGIN</button>
                </div>
            </div>
        </div>
    </div>
  );

}

export default Navbar;