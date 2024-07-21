import React from 'react';
import './Features.scss';

const Features = () => {

  return (
    <div className='test features'>
        <div className='test features-inner'>
            <div className="test upper-feature">
                <h3 className="section-title">FEATURES</h3>
                <h1 className="title">We do it best.</h1>
            </div>
            <div className="test lower-feature">
                <div className="test feature-card">
                    <div className="logo-container">
                        <img src="https://res.cloudinary.com/dv9ax00l4/image/upload/v1721331225/feature-1_ng7jd6.svg" alt="feature-icon" className="icon" />
                    </div>
                    <h2 className="title">Logging</h2>
                    <p className="message">Logging your flying data and access anythime.</p>
                </div>
                <div className="test feature-card">
                    <div className="logo-container">
                        <img src="https://res.cloudinary.com/dv9ax00l4/image/upload/v1721331225/feature-2_psm168.svg" alt="feature-icon" className="icon" />
                    </div>
                    <h2 className="title">Access</h2>
                    <p className="message">Access from various devices.</p>
                </div>
                <div className="test feature-card">
                    <div className="logo-container">
                        <img src="https://res.cloudinary.com/dv9ax00l4/image/upload/v1721331225/feature-3_rpaycg.svg" alt="feature-icon" className="icon" />
                    </div>
                    <h2 className="title">Reports</h2>
                    <p className="message">View analytics reports and generate reports.</p>
                </div>
            </div>
            <div></div>
        </div>
    </div>
  );

}

export default Features;