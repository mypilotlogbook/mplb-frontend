import React, { useState } from 'react';
import './DashboardHeader.scss';
import Tooltip from '@mui/material/Tooltip';

const DashboardHeader = () => {

    const [fname, setFName] = useState('Jeral');

    const handleLogout = () => {

    }

    return (
        <div className='test dashboard-header'>
            <div className="test dashboard-header-left">
                <h2 className="test welcome-text">Good Morning, 
                    <span className="test name">{fname}</span> 
                    <span className="test bye">👋</span>
                </h2>
                <h5 className="test name-text">Welcome to MyPilotLogBook Analytics Dashboard</h5>
            </div>
            <div className="test dashboard-header-right">
                <Tooltip title="Logout" arrow>
                    <div className="test logout-container" onClick={handleLogout}>
                        <img src="https://res.cloudinary.com/dv9ax00l4/image/upload/v1722720942/sign-out-alt_liq1gr.png" alt="logout-logo" className="test logout-logo" />
                    </div>
                </Tooltip>
            </div>
        </div>
    );
}

export default DashboardHeader;