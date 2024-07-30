import React from 'react';
import './AboutInfor.scss';
import { AboutInforProps } from '../../typescript/interfaces/interface';

const AboutInfor = (props: AboutInforProps) => {

  return (
    <div className='test about-infor'>
        <h4 className="test about-infor-title">{props.title}</h4>
        <p className="test about-infor-message">{props.message}</p>
    </div>
  );

}

export default AboutInfor;