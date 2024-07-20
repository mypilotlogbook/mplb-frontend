import React from 'react';
import './AuthSubHeader.scss';
import { AuthSubHeaderProps } from '../../typescript/types/type';

const AuthSubHeader = (props: AuthSubHeaderProps) => {

  return (
    <h5 className='test auth-subheader'
        style={{
            color: props.color,
            fontWeight: props.fontWeight,
            textAlign: props.textAlign
        }}
    >
        {props.message}
    </h5>
  );

}

export default AuthSubHeader;