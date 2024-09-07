import React from 'react';
import './DashboardTextfield.scss';
import { DashboardTextfieldProps } from '../../typescript/types/type';

const DashboardTextfield: React.FC<DashboardTextfieldProps> = ({ type, name, value, placeholder, onChange, isDescription }) => {
  return (
    <input
      style={{
        height: isDescription ? '150px' : ''
      }}
      className='test text-field' 
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange} 
    />
  );
};

export default DashboardTextfield;
  