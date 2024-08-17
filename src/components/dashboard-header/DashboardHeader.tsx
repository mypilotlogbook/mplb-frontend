import React, { useContext, useEffect, useState } from 'react';
import './DashboardHeader.scss';
import Tooltip from '@mui/material/Tooltip';
import { TokenContext } from '../../context/TokenContext';
import { useNavigate } from 'react-router-dom';
import { IdContext } from '../../context/UserIdContext';
import getUserName from '../../api/user-endpoints/getUser';
import { getDayHoursAndSetGreeting } from '../../utils/getDayHour';

const DashboardHeader = () => {

    const [name, setName] = useState('');
    const [greeting, setGreeting] = useState('');

    const tokenContext = useContext(TokenContext);
    const idContext = useContext(IdContext);

    //navigate
    const navigate = useNavigate();

    // Ensure the context is not null
    if (!tokenContext) {
        throw new Error('DashboardHeader must be used within a TokenProvider');
    }
    if (!idContext) {
        throw new Error('DashboardHeader must be used within a IdProvider');
    }

    const { token, clearToken } = tokenContext;
    const { id, clearId } = idContext;

    const handleLogout = () => {
        const confirmed = window.confirm("Are you sure you want to log out?");
        if (confirmed) {
            clearToken(); 
            clearId();
            navigate('/login');
        }
    }

    const getUserInfor = () => {
        getUserName({
            setName: setName,
            id: id
        });
    }

    const setGreetingText = () => {
        setGreeting(getDayHoursAndSetGreeting());
    }

    useEffect( () => {
        getUserInfor();
        setGreetingText();
    }, [])

    return (
        <div className='test dashboard-header'>
            <div className="test dashboard-header-left">
                <h2 className="test welcome-text">{greeting},
                    <span className="test name">{token ? name : 'Guest'}</span> 
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