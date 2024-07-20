import React from 'react';
import './LoadingPage.scss';
import LoadingIcon from '../../components/loading-icon/LoadingIcon';

const LoadingPage = () => {

  return (
    <div className='test loading-page'>
      <div className="test loading-page-inner">
        <LoadingIcon />
      </div>
    </div>
  );

}

export default LoadingPage;