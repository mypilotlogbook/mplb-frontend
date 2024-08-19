import React, { useContext, useState } from 'react';
import './AddPilot.scss';
import BackButton from '../../components/back-button/BackButton';
import { Link } from 'react-router-dom';
import Lable from '../../components/lable/Lable';
import DashboardTextfield from '../../components/dashboard-textfield/DashboardTextfield';
import addPilot from '../../api/pilot-endpoints/addPilot';
import { IdContext } from '../../context/UserIdContext';
import { PilotProps } from '../../typescript/interfaces/interface';
import Alert from '../../components/alert/Alert';

const AddPilot = () => {

  const [pilot, setPilot] = useState<PilotProps>({});
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [statusCode, setStatusCode] = useState(0);
  const [message, setMessage] = useState('');

  const idContext = useContext(IdContext);
  if(!idContext) {
    throw new Error('AddPilot must be used within a IdProvider');
  }
  const { id } = idContext; 

  const resetCredentials = () => {
    setPilot({});
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPilot((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    const pilotObj = {
      ...pilot,
      userId: id || undefined,
    }
    console.log(pilot);
    addPilot({
      userId: id,
      pilot: pilotObj,
      setError: setError,
      setSuccess: setSuccess,
      setStatusCode: setStatusCode,
      setMessage: setMessage,
      resetCredentials: resetCredentials,
    });
  }

  return (
    <div className='test add-pilot'>

      {
        error && <Alert
          message={message}
          statusCode={statusCode}
          type='error'
        />
      }
      {
        success && <Alert
          message={message}
          statusCode={statusCode}
          type='success'
        />
      }

      <div className="test single-pilot-header">
        <Link to='/dashboard/pilots'>
            <BackButton image='https://res.cloudinary.com/dv9ax00l4/image/upload/v1722961275/arrow-small-left_llmk3x.png'/>
        </Link>
        <h6 className="test page-subtitle">Back to Pilots</h6>
      </div>

      <div className="test add-pilot-content">
        <h1 className="test header">Add New Pilot</h1>
        <h5 className="test subheader">Fill the details for add a new pilot</h5>
        <div className="test form-container">
          <div className="test input">
            <Lable
              title='First Name'
            />
            <DashboardTextfield
              type='text'
              name='fname'
              value={pilot?.fname || ''}
              placeholder='Enter pilot first name'
              onChange={handleChange}
            />
          </div>
          <div className="test input">
            <Lable
              title='Last Name'
            />
            <DashboardTextfield
              type='text'
              name='lname'
              value={pilot?.lname || ''}
              placeholder='Enter pilot last name'
              onChange={handleChange}
            />
          </div>
          <div className="test input">
            <Lable
              title='Profile Image'
            />
            <DashboardTextfield
              type='text'
              name='image'
              value={pilot?.image || ''}
              placeholder='Enter pilot profile image url / Optional'
              onChange={handleChange}
            />
          </div>
          <div className="test input">
            <Lable
              title='Age'
            />
            <DashboardTextfield
              type='text'
              name='age'
              value={pilot?.age || ''}
              placeholder='Enter pilot age'
              onChange={handleChange}
            />
          </div>
          <div className="test input">
            <Lable
              title='Mobile'
            />
            <DashboardTextfield
              type='text'
              name='mobile'
              value={pilot?.mobile || ''}
              placeholder='Enter pilot mobile number'
              onChange={handleChange}
            />
          </div>
          <div className="test input">
            <Lable
              title='Email Address'
            />
            <DashboardTextfield
              type='text'
              name='email'
              value={pilot?.email || ''}
              placeholder='Enter pilot email address'
              onChange={handleChange}
            />
          </div>
          <div className="test input">
            <Lable
              title='Address'
            />
            <DashboardTextfield
              type='text'
              name='address'
              value={pilot?.address || ''}
              placeholder='Enter pilot address'
              onChange={handleChange}
            />
          </div>
          <div className="test input">
            <Lable
              title='Employee ID'
            />
            <DashboardTextfield
              type='text'
              name='employee_id'
              value={pilot?.employee_id || ''}
              placeholder='Enter pilot employee id'
              onChange={handleChange}
            />
          </div>
          <div className="test input">
            <Lable
              title='Company'
            />
            <DashboardTextfield
              type='text'
              name='company'
              value={pilot?.company || ''}
              placeholder='Enter pilot company'
              onChange={handleChange}
            />
          </div>
          <div className="test input">
            <Lable
              title='Position'
            />
            <DashboardTextfield
              type='text'
              name='position'
              value={pilot?.position || ''}
              placeholder='Enter pilot position'
              onChange={handleChange}
            />
          </div>
          <div className="test input">
            <Lable
              title='Click here to add pilot'
            />
            <button className="test add-btn" onClick={handleSubmit}>Add Pilot</button>
          </div>
        </div>
      </div>

    </div>
  );

}

export default AddPilot;