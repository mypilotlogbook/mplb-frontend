import React from 'react';
import './RoundedIcon.scss';
import { RoundedIconProps } from '../../typescript/types/type';

const RoundedIcon = (props: RoundedIconProps) => {

  return (
    <div className='test rounded-icon'>
        <img src={props.image} alt="rounded-icon-logo" className="test rounded-icon-logo" />
    </div>
  );

}

export default RoundedIcon;