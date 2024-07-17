import React from 'react';
import './NotFoundPage.scss';
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import animationData from '../../assets/lotties/not-found.json';

const NotFoundPage = () => {

  return (
    <div className='notfound'>
      <div className="notfound-inner">
        <Lottie animationData={animationData} className='anim'/>
        <Link to='/' className='link'>
          <h5 className='notfound-text'>Back to Home</h5>
        </Link>
      </div>
    </div>
  );

}

export default NotFoundPage;