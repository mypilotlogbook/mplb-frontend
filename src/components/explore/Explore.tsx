import React from 'react';
import './Explore.scss';
import { Link } from 'react-router-dom';

const Footer = () => {

  return (
    <div className='test explore'>
        <div className="test explore-inner">
            <h4 className='test subtitle'>EXPLORE</h4>
            <div className="test explore-content">
                <h2 className="test title">See what we can do together.</h2>
                <Link to='/about-us' className='link'>
                  <button className='test explore-cta'>
                      EXPLORE US
                  </button>
                </Link>
            </div>
        </div>
    </div>
  );

}

export default Footer;