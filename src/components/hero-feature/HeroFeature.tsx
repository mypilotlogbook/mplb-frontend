import React from 'react';
import './HeroFeature.scss';

const HeroFeature = () => {

  return (
    <div className='test hero-feature'>
        <div className="test hero-feature-left">
            <h4 className="test featured-text">CONTACT</h4>
        </div>
        <div className="test hero-feature-right">
            <div className="test hero-feature-right-top">
                MYPILOTLOGBOOK
            </div>
            <div className="test hero-feature-right-bottom">
                FILL OUT THE FORM BELOW
            </div>
        </div>
    </div>
  );

}

export default HeroFeature;