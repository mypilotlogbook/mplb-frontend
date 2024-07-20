import React from 'react';
import './AuthButton.scss';
import { AuthButtonProps } from '../../typescript/types/type';

const AuthButton = (props: AuthButtonProps) => {

  return (
    <button className='auth-btn test'
            onClick={props.onClick}
            style={{
              backgroundColor: props.backgroundColor,
              color: props.textColor,
              borderColor: props.borderColor
            }}
    >
      {props.title}
    </button>
  );

}

export default AuthButton;