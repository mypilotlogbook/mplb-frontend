import React from 'react';
import './Settings.scss';
import PageHeader from '../../components/page-header/PageHeader';

const Settings = () => {

    return (
        <div className='settings test'>
            <PageHeader
                title='Settings'
                subTitle='Customize the system as your wish.'
            />
        </div>
    );
}

export default Settings;