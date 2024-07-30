import React, { useState } from 'react';
import './AboutSection.scss'; 
import { AboutInforProps } from '../../typescript/interfaces/interface';
import AboutInfor from '../about-info/AboutInfor';

const AboutSection = () => {

    const [information, setInformation] = useState<AboutInforProps[]>([
        {
            title: "About My Pilot Logbook",
            message: "Welcome to My Pilot Logbook, your premier web application for digital flight logging. We understand the intricacies and demands of maintaining precise flight logs, whether you are a professional pilot or a recreational flyer. Our mission is to provide a seamless, intuitive, and affordable solution tailored to meet all your flight logging needs."
        },
        {
            title:"Simplifying Flight Logging",
            message:"My Pilot Logbook eliminates the hassle of traditional flight logging with our user-friendly platform. Our intuitive interface makes recording and managing your flight data a breeze, so you can focus on what truly matters – enjoying your time in the sky."
        },
        {
            title:"Comprehensive Logbook Solution",
            message:"My Pilot Logbook is crafted for all aviation enthusiasts. Whether you fly single-engine planes, gliders, helicopters, or jets, our logbook supports a diverse range of flying experiences. From tracking flight hours to making specialized entries for different aircraft types, our logbook includes all the essential fields you need."
        },
        {
            title:"Tailored for Professional Pilots",
            message:"For professional aviators, My Pilot Logbook offers a robust solution designed to meet your rigorous demands. Our platform ensures accurate tracking of your flight hours and provides detailed insights into your flying history. Stay organized and prepared for licensing and certification with our comprehensive logging system."
        },
        {
            title:"Ideal for Recreational Flyers",
            message:"Recreational pilots will also find My Pilot Logbook invaluable. Capture every memorable moment of your flying adventures with ease. Our logbook is perfect for weekend getaways and leisurely flights, ensuring that every flight is documented effortlessly."
        },
        {
            title:"Unmatched Convenience",
            message:"With My Pilot Logbook, your flight data is securely stored and accessible from anywhere, anytime. Whether you prefer using a computer, tablet, or smartphone, our platform offers the flexibility you need to log flights on the go."
        },
        {
            title:"Collaborative Flight Logging",
            message:"Collaborate effortlessly with your crew. My Pilot Logbook allows users to share flight entries with each other, so only one person on the flight deck needs to log the flight. Teamwork has never been easier."
        },
        {
            title:"Join the My Pilot Logbook Community",
            message:"Embrace the future of flight logging with My Pilot Logbook. Whether you're an experienced pilot or just starting your aviation journey, our platform provides everything you need for accurate and comprehensive flight records. Join the growing community of pilots who trust My Pilot Logbook for their flight logging needs."
        },
        {
            title:"Free Trial",
            message:"Ready to elevate your flight logging experience? Sign up for My Pilot Logbook's web application and enjoy a free trial. We welcome your feedback as we continually strive to improve our platform to better serve your unique needs. Together, let's shape the future of flight logging."
        },
        {
            title:"Need More Information?",
            message:"Contact us for more information."
        },
    ]);

    return (
        <div className='test about-section'>
            <div className="test about-section-inner">
                {
                    information.map((info, index) => {
                        return (
                            <AboutInfor
                                title={info.title}
                                message={info.message}
                            />
                        );
                    })
                }
            </div>
        </div>
    );

}

export default AboutSection;