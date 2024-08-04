import React from 'react';
import './HelpCenter.scss';
import PageHeader from '../../components/page-header/PageHeader';

const HelpCenter = () => {

    return (
        <div className='test help-center'>
            <PageHeader
                title='Help Center'
                subTitle='Any questions? We are here to help.'
            />
        </div>
    );
}

export default HelpCenter;