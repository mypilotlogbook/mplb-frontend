import React from 'react';
import './LoadingPage.scss';
import LoadingIcon from '../../components/loading-icon/LoadingIcon';

const LoadingPage = () => {

  return (
    <div className='loading-page'>
      <div className="loading-page-inner">
        <LoadingIcon />
      </div>
    </div>
  );

}

export default LoadingPage;