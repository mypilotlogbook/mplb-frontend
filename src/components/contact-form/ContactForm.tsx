import React from 'react';
import './ContactForm.scss';
import Logo from '../logo/Logo';
import Lable from '../lable/Lable';
import Textfield from '../textfield/Textfield';
import AuthButton from '../auth-button/AuthButton';
import TextArea from '../text-area/TextArea';

const ContactForm = () => {

    return (
        <div className='test contact-form'>
            <div className="test contact-form-left">
                <div className="test contact-form-container">
                    <h1 className="test contact-header-title">CONTACT US</h1>
                    <hr className='test line'/>
                    <div className="test contact-container">
                        <div className="test input-container">
                            <Lable title='EMAIL ADDRESS'/>
                            <Textfield
                                isContact={true}
                                type='text'
                                placeholder='Enter email address' 
                                onChange={() => {}} 
                            />
                        </div>
                        <div className="test input-container">
                            <Lable title='MESSAGE'/>
                            <TextArea
                                isContact={true}
                                placeholder='Enter your message'
                                value=''
                                onChange={ () => {}}
                            />
                        </div>
                        <AuthButton 
                            title='Send Message'
                            textColor='white'
                            backgroundColor='black'
                            borderColor='black'
                            onClick={() => {}}
                        />
                    </div>
                </div>
            </div>
            <div className="test contact-form-right">
                <div className="test contact-form-right-up">
                    <Logo />
                </div>
                <div className="test contact-form-right-down">
                    <div className="test section">
                        <h5 className='test contact-title'>QUICK CONNECT</h5>
                    </div>
                    <div className="test section">
                        <h5 className="test contact-info">+94 77 825 0712</h5>
                        <a href="tel:+94778250712">
                            <img src="https://res.cloudinary.com/dv9ax00l4/image/upload/v1722531206/right-arrow_2_eq4drm.png" alt="arrow" className='test arrow'/>
                        </a>
                    </div>
                    <div className="test section">
                        <h5 className="test contact-info">mypilotlogbook4@gmail.com</h5>
                        <a href="mailto:mypilotlogbook4@gmail.com">
                            <img src="https://res.cloudinary.com/dv9ax00l4/image/upload/v1722531206/right-arrow_2_eq4drm.png" alt="arrow" className='test arrow'/>
                        </a>
                    </div>
                    <div className="test section">
                        <h5 className="test contact-info">+94 77 825 0712</h5>
                        <a href="tel:+94778250712">
                            <img src="https://res.cloudinary.com/dv9ax00l4/image/upload/v1722531206/right-arrow_2_eq4drm.png" alt="arrow" className='test arrow'/>
                        </a>
                    </div>
                    <div className="test section"></div>
                </div>
            </div>
        </div>
    );

}

export default ContactForm;