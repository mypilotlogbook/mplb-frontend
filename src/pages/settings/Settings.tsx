import React, { useContext, useEffect, useState } from 'react';
import './Settings.scss';
import PageHeader from '../../components/page-header/PageHeader';
import DashboardTextfield from '../../components/dashboard-textfield/DashboardTextfield';
import Lable from '../../components/lable/Lable';
import { Tooltip } from '@mui/material';
import Alert from '../../components/alert/Alert';
import deletePilotsByUserId from '../../api/pilot-endpoints/deletePilotsByUserId';
import { IdContext } from '../../context/UserIdContext';
import deleteAircraftsByUserId from '../../api/aircraft-endpoints/deleteAircraftsByUserId';
import { Credentials } from '../../typescript/types/type';
import quickChangePassword from '../../api/user-endpoints/quickChangePassword';
import { User } from '../../typescript/interfaces/interface';
import getUserEmail from '../../api/user-endpoints/getUserEmail';

const Settings = () => {

    const [email, setEmail] = useState<string>('');
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [statusCode, setStatusCode] = useState(0);
    const [message, setMessage] = useState('');
    const [credentials, setCredentials] = useState<Credentials>({
        password: '',
        confirmPassword: '',
    });

    const idContext = useContext(IdContext);
    if(!idContext) {
        throw new Error('IdContext not found');
    }
    const { id } = idContext;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials((prevData) => ({
          ...prevData,
          [e.target.name]: e.target.value,
        }));
    };

    const handleDeletePilotData = () => {
        const isConfirmed = window.confirm('Are you sure you want to reset your pilots data? This will lose all your pilots data.');
        if (isConfirmed) {
            deletePilotsByUserId({
                userId: id,
                setSuccess: setSuccess,
                setStatusCode: setStatusCode,
                setMessage: setMessage,
                setError: setError
            });
        }
    }

    const handleDeleteAircraftData = () => {
        const isConfirmed = window.confirm('Are you sure you want to reset your aircrafts data? This will lose all your aircrafts data.');
        if (isConfirmed) {
            deleteAircraftsByUserId({
                userId: id,
                setSuccess: setSuccess,
                setStatusCode: setStatusCode,
                setMessage: setMessage,
                setError: setError
            });
        }
    }

    const resetCredentials = () => {
        setCredentials({
            password: '',
            confirmPassword: '',
        });
    }

    const getUserInfo = () => {
        getUserEmail({
            id: id,
            setEmail: setEmail
        });
    }

    useEffect(() => {
        getUserInfo();
    }, []);

    const handleChangePassword = () => {
        const isConfirmed = window.confirm('Are you sure you want to reset your password?');
        if (isConfirmed) {
            quickChangePassword({
                userId: id,
                email: email,
                credentaials: credentials,
                setSuccess: setSuccess,
                setStatusCode: setStatusCode,
                setMessage: setMessage,
                setError: setError,
                resetCredentials: resetCredentials
            });
        }
    }

    return (
        <div className='settings test'>
            <PageHeader
                title='Settings'
                subTitle='Customize the system as your wish.'
            />

            {
              error && <Alert
                statusCode={statusCode}
                message={message}
                type='error'
              />
            }
            {
              success && <Alert
                statusCode={statusCode}
                message={message}
                type='success'
              />
            }

            <div className="test settings-content">

                {/* forgot password section */}
                <div className="test settings-section">
                    <h3 className="test section-header">Change Password</h3>
                    <h5 className="test section-subheader">Set a new password for your account</h5>
                    <hr className="test line" />
                    <div className="test settings-content-section">
                        <h4 className="test email">{email}</h4>
                        <div className="test textfields">
                            <div className="test input">
                                <Lable
                                    title='New Password'
                                />
                                <DashboardTextfield
                                    type='text'
                                    name='password'
                                    value={credentials.password || ''}
                                    placeholder='Enter your new password'
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="test input">
                                <Lable
                                    title='Confirm Password'
                                />
                                <DashboardTextfield
                                    type='text'
                                    name='confirmPassword'
                                    value={credentials.confirmPassword || ''}
                                    placeholder='Enter your confirm password'
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <Tooltip title="Click here to Change Password" arrow>
                            <button onClick={handleChangePassword} className='test change-button'>Change Password</button>
                        </Tooltip>
                    </div>
                </div>

                <hr className='test hard-line'/>

                {/* reset pilot data section */}
                <div className="test settings-section">
                    <h3 className="test section-header">Reset Pilots Data</h3>
                    <h5 className="test section-subheader">Reset your pilots all the data</h5>
                    <hr className="test line" />
                    <div className="test settings-content-section">
                        <h4 className="test email">Warning. You can only reset your pilots data. This is cause to loose your all the pilot data it's analytics and charts.</h4>
                        <Tooltip title="Click here to Reset Pilot Data" arrow>
                            <button className='test change-button' onClick={handleDeletePilotData}>Reset Data</button>
                        </Tooltip>
                    </div>
                </div>
                
                <hr className='test hard-line'/>
                
                {/* reset flight data section */}
                <div className="test settings-section">
                    <h3 className="test section-header">Reset Flight Data</h3>
                    <h5 className="test section-subheader">Reset your flights all the data</h5>
                    <hr className="test line" />
                    <div className="test settings-content-section">
                        <h4 className="test email">Warning. You can only reset your flights data. This is cause to loose your all the flights data it's analytics and charts.</h4>
                        <Tooltip title="Click here to Reset Pilot Data" arrow>
                            <button className='test change-button'>Reset Data</button>
                        </Tooltip>
                    </div>
                </div>
                
                <hr className='test hard-line'/>
                
                {/* reset aircrafts data section */}
                <div className="test settings-section">
                    <h3 className="test section-header">Reset Aircraft Data</h3>
                    <h5 className="test section-subheader">Reset your aircraft all the data</h5>
                    <hr className="test line" />
                    <div className="test settings-content-section">
                        <h4 className="test email">Warning. You can only reset your aircraft data. This is cause to loose your all the aircraft data it's analytics and charts.</h4>
                        <Tooltip title="Click here to Reset Aircraft Data" arrow>
                            <button className='test change-button' onClick={handleDeleteAircraftData}>Reset Data</button>
                        </Tooltip>
                    </div>
                </div>
                
                <hr className='test hard-line'/>

                {/* reset data section */}
                <div className="test settings-section">
                    <h3 className="test section-header">Reset Account</h3>
                    <h5 className="test section-subheader">Reset your account</h5>
                    <hr className="test line" />
                    <div className="test settings-content-section">
                        <h4 className="test email">Warning. You can reset your whole account data. This is cause to loose your all data including Pilots, Flights, Aircrafts and all the analytics and charts.</h4>
                        <Tooltip title="Click here to Reset Data" arrow>
                            <button className='test change-button'>Reset Data</button>
                        </Tooltip>
                    </div>
                </div>

                <hr className='test hard-line'/>
                
                {/* delete account section */}
                <div className="test settings-section">
                    <h3 className="test section-header">Delete Account</h3>
                    <h5 className="test section-subheader">Delete your account</h5>
                    <hr className="test line" />
                    <div className="test settings-content-section">
                        <h4 className="test email">Warning. You can delete and deactivate your account. If you delete your account it's cause to loose your all data including Pilots, Flights, Aircrafts and all the analytics and charts. You can't no longer access to your account.</h4>
                        <Tooltip title="Delete Account" arrow>
                            <button className='test change-button'>Delete Account</button>
                        </Tooltip>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Settings;