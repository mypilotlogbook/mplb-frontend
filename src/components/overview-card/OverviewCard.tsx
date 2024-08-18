import React, { useState } from 'react';
import './OverviewCard.scss';
import { OverviewCardProps } from '../../typescript/types/type';

const OverviewCard = (props: OverviewCardProps) => {

  const [loaded, setLoaded] = useState(false);

  return (
    <div className='test overview-card'>
        <div className="test overview-card-left">
            <img className="test overview-card-image" src={props.image} alt="overview card image" />
        </div>
        <div className="test overview-card-right">
            <h1 className="test overview-card-count">{props.count}</h1>
            <h2 className="test overview-card-title">{props.title}</h2>
            <p className="test overview-card-description">{props.description}</p>
        </div>
    </div>
  );

}

export default OverviewCard;