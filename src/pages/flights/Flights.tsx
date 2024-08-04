import React from 'react';
import './Flights.scss';
import PageHeader from '../../components/page-header/PageHeader';

const Flights = () => {

    return (
        <div className='test flights'>
            <PageHeader
                title='Flights List'
                subTitle='Manage all the flights and track their data.'
            />
        </div>
    );

}

export default Flights;