import React from 'react';
import './HeroFeature.scss';
import { HeroFeatureProps } from '../../typescript/types/type';

const HeroFeature = (props: HeroFeatureProps) => {

  return (
    <div className='test hero-feature'>
        <div className="test hero-feature-left">
            <h4 className="test featured-text">{props.page}</h4>
        </div>
        <div className="test hero-feature-right">
            <div className="test hero-feature-right-top">
                MYPILOTLOGBOOK
            </div>
            <div className="test hero-feature-right-bottom">
                {props.message}
            </div>
        </div>
    </div>
  );

}

export default HeroFeature;