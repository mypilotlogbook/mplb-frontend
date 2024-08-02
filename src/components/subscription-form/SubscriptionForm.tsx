import React from 'react';
import './SubscriptionForm.scss';
import AuthSubHeader from '../auth-subheader/AuthSubHeader';
import AuthButton from '../auth-button/AuthButton';
import Section from '../section/Section';

const SubscriptionForm = () => {

    return (
        <div className='test subscription-form'>
            <div className="test subscription-form-inner">
                <div className="test left">
                    <AuthSubHeader message='NEWSLETTER'/>
                    <Section marginBottom='20px'/>
                    <div className="test sub-header-container">
                        <h5 className="test sub-header">Everything</h5>
                        <h5 className="test sub-header">about logging in</h5>
                        <h5 className="test sub-header">your inbox.</h5>
                    </div>
                    <Section marginBottom='50px'/>
                    <div className="test info-container">
                        <div className="test info">
                            <img src="https://res.cloudinary.com/dv9ax00l4/image/upload/v1722604674/bullet-icon_wiawu4.png" alt="bullet-img" className="bullet test" />
                            <h5 className="test info-text">Stay informed with the latest updates from our team by subscribing to our newsletter.</h5>
                        </div>
                        <div className="test info">
                            <img src="https://res.cloudinary.com/dv9ax00l4/image/upload/v1722604674/bullet-icon_wiawu4.png" alt="bullet-img" className="bullet test" />
                            <h5 className="test info-text">Don't miss out on exclusive content and special offers—sign up for our newsletter today.</h5>
                        </div>
                        <div className="test info">
                            <img src="https://res.cloudinary.com/dv9ax00l4/image/upload/v1722604674/bullet-icon_wiawu4.png" alt="bullet-img" className="bullet test" />
                            <h5 className="test info-text">Join our community of subscribers and receive regular updates, behind-the-scenes news.</h5>
                        </div>
                    </div>
                </div>
                <div className="test bgcontainer">
                    <div className="test middle">
                        <div className="test section">
                            <h3 className="test header-title">FREQUENCY</h3>
                        </div>
                        <div className="test section">
                            <input type="radio" name="frequency" id="Daily" className='test radio-btn' />
                            <h5 className="test text">Daily</h5>
                        </div>
                        <div className="test section">
                            <input type="radio" name="frequency" id="Weekly" className='test radio-btn' />
                            <h5 className="test text">Weekly</h5>
                        </div>
                        <div className="test section">
                            <input type="radio" name="frequency" id="Monthly" className='test radio-btn' />
                            <h5 className="test text">Monthly</h5>
                        </div>
                        <div className="test section"></div>
                    </div>
                    <div className="test right">
                        <div className="test input-field">
                            <h5 className="test lable">NAME</h5>
                            <input type="text" placeholder='NAME' className="test subscribe-text-field" />
                        </div>
                        <div className="test input-field">
                            <h5 className="test lable">EMAIL ADDRESS</h5>
                            <input type="text" placeholder='EMAIL ADDRESS' className="test subscribe-text-field" />
                        </div>
                        <AuthButton onClick={() => {}} title='SUBSCRIBE' textColor='black' borderColor='white' backgroundColor='white'/>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default SubscriptionForm;