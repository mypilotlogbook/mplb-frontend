import React from 'react';
import './BackButton.scss';
import { BackButtonProps } from '../../typescript/types/type';

const BackButton = (props: BackButtonProps) => {

    return (
        <div className='back-btn test'>
            <img src={props.image} alt="back-icon" className="test back-icon" />
        </div>
    );

}

export default BackButton;