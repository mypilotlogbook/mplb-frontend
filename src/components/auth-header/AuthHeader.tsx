import React from 'react';
import './AuthHeader.scss';
import { AuthHeaderProps } from '../../typescript/types/type';

const AuthHeader = (props: AuthHeaderProps) => {

  return (
    <h1 className='test auth-header'>{props.title}</h1>
  );

}

export default AuthHeader;