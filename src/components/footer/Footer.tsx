import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <div className='test footer'>
            <div className="test footer-inner">
                <div className="round-content">
                    <img src="https://res.cloudinary.com/dv9ax00l4/image/upload/v1721331229/logo_xbmr4z.png" alt="logo" className='logo'/>
                </div>
                <div className="test content">
                    <div className="upper">"</div>
                    <div className="middle">
                        <h1 className="quote">The engine is the heart of an airplane,</h1>
                        <h1 className="quote">but the pilot is its soul.</h1>
                    </div>
                    <div className="lower">"</div>
                </div>
                <hr className='test line'/>
                <div className="test social">
                    <a href="" className='link'> 
                        <img src="https://res.cloudinary.com/dv9ax00l4/image/upload/v1721331225/facebook_r4c1ms.png" alt="social-link" className="social-link" />
                    </a>
                    <a href="" className='link'>
                        <img src="https://res.cloudinary.com/dv9ax00l4/image/upload/v1721331227/linkedin_kmn00f.png" alt="social-link" className="social-link" />
                    </a>
                    <a href="" className='link'>
                        <img src="https://res.cloudinary.com/dv9ax00l4/image/upload/v1721331226/instaagram_gjqb1d.png" alt="social-link" className="social-link" />
                    </a>
                    <a href="" className='link'>
                        <img src="https://res.cloudinary.com/dv9ax00l4/image/upload/v1721331235/twitter_mggh1d.png" alt="social-link" className="social-link" />
                    </a>
                </div>
                <hr className='test line'/>
                <div className="test social-lower">
                    <div className="test policies">
                        <Link className='link' to='/privacy-policy'>
                            <h5 className="test policy">Privacy Policy</h5>
                        </Link>
                        <Link className='link' to='/terms-and-conditions'>
                            <h5 className="test policy">Terms and Conditions</h5>
                        </Link>
                    </div>
                    <div className="test copyright">
                        <h5 className="test copyright-text">
                        © 2024 mypilotlogbook. All Rights Reserved
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Footer;