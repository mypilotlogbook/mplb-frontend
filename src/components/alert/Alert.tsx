import React from 'react';
import './Alert.scss';
import { AlertProps } from '../../typescript/types/type';

const successLogo = "https://res.cloudinary.com/dv9ax00l4/image/upload/v1721840937/check_1_o4xkmp.png"; 
const warnLogo = "https://res.cloudinary.com/dv9ax00l4/image/upload/v1721840936/warning_t9kjmz.png"; 
const errorLogo = "https://res.cloudinary.com/dv9ax00l4/image/upload/v1721840936/cross_o70woo.png"; 

const Alert = (props: AlertProps) => {

    return (
        <div className='alert'>
             <div className="alert-left">
                <div className="logo-container">
                    <img src={ props.type === 'success' ? successLogo : props.type === 'warn' ? warnLogo : errorLogo } alt="notification-logo" className="logo" />
                </div>
             </div>
             <div className="alert-right">
                <p className="statusCode">{ props.statusCode }</p>
                <h3 className="title">{ props.type === 'success' ? 'Success' : props.type === 'warn' ? 'Warning' : 'Error' }</h3>
                <p className="message">{ props.message }</p>
             </div>
        </div>
    );

}

export default Alert;