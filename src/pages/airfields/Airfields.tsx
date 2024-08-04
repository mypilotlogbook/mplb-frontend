import React from 'react';
import './Airfields.scss';
import PageHeader from '../../components/page-header/PageHeader';

const Airfields = () => {

  return (
    <div className='test airfields'>
      <PageHeader 
        title='Airfields List'
        subTitle='List down all the airfields and take your time to explore.'
      />
    </div>
  );

}

export default Airfields;