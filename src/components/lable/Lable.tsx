import React from 'react';
import './Lable.scss';
import { LableProps } from '../../typescript/types/type';

const Lable = (props: LableProps) => {

  return (
    <div className='test lable'>
        {props.title}
    </div>
  );

}

export default Lable;