import React from 'react';
import './Aircarfts.scss';
import PageHeader from '../../components/page-header/PageHeader';

const Aircarfts = () => {

    return (
        <div className='test aircrafts'>
            <PageHeader
                title='Aircrafts List'
                subTitle='List down all the aircarfts and manage them.'
            />
        </div>
    );
}

export default Aircarfts;