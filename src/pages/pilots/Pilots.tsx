import React from 'react';
import './Pilots.scss';
import PageHeader from '../../components/page-header/PageHeader';

const Pilots = () => {

    return (
        <div className='test pilots'>
            <PageHeader
                title='Pilots List'
                subTitle='Manage your pilots and their data.'
            />
        </div>
    );

}

export default Pilots;