import React, { useContext, useEffect, useState } from 'react'
import './SinglePilot.scss';
import { PilotProps, UpdatePilot } from '../../typescript/interfaces/interface';
import { Link, useNavigate, useParams } from 'react-router-dom';
import BackButton from '../../components/back-button/BackButton';
import { Tooltip } from '@mui/material';
import { IdContext } from '../../context/UserIdContext';
import Lable from '../../components/lable/Lable';
import DashboardTextfield from '../../components/dashboard-textfield/DashboardTextfield';
import getPilotById from '../../api/pilot-endpoints/getPilot';
import deletePilot from '../../api/pilot-endpoints/deletePilot';
import Alert from '../../components/alert/Alert';

const SinglePilot = () => {

  const [pilot, setPilot] = useState<PilotProps | undefined>(undefined);
  const [formData, setFormData] = useState<UpdatePilot>();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [statusCode, setStatusCode] = useState(0);
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const { pilotId } = useParams();

  const idContext = useContext(IdContext);
  const id = idContext?.id;
  if (!id) {
    throw new Error('Id context is not available');
  } 

  const handleUpdate = () => {

  }

  const handleDelete = () => {
    //disbale ESLint restrictions
    // eslint-disable-next-line no-restricted-globals
    const isConfirmed = confirm('Are you sure want to delete this pilot record?');
    if (isConfirmed) {
      deletePilot({
        pilotId: pilotId || null,
        setStatusCode: setStatusCode,
        setSuccess: setSuccess,
        setError: setError,
        setMessage: setMessage,
        navigate: navigate,
      });
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const getSinglePilot = () => {
      getPilotById({
        setPilot: setPilot,
        pilotId: pilotId,
        setFormData: setFormData,
      });
  }

  useEffect(() => {
    getSinglePilot();
  }, []);

  return (
    <div className='single-pilot test'>

      {
        error && <Alert 
          type='error'
          statusCode={statusCode}
          message={message}
        />
      }
      {
        success && <Alert 
          type='success'
          statusCode={statusCode}
          message={message}
        />
      }

      <div className="test single-pilot-header">
        <Link to='/dashboard/pilots'>
            <BackButton image='https://res.cloudinary.com/dv9ax00l4/image/upload/v1722961275/arrow-small-left_llmk3x.png'/>
        </Link>
        <h6 className="test page-subtitle">Back to Pilots</h6>
      </div>

      <div className="test single-pilot-content">
        <div className="profile-img-section test">
          <div className="test profile-pic-container">
            <img src={pilot?.image ? pilot?.image : 'https://res.cloudinary.com/dv9ax00l4/image/upload/v1723890106/user-profile-img-removebg-preview_rlafow.png' } alt="profile-image" className="test profile-image" />
          </div>
        </div>

        <div className="test section1">
          <div className="test section1-left">
            <h3 className="test lable">Edit Pilot Details</h3>
            <h6 className="test sub-lable">Update pilot profile and details!</h6>
          </div>
          <div className="test section1-right">
            <Tooltip title="Click here to save your changes" arrow>
              <button className="test save-button" onClick={handleUpdate}>Save Changes</button>
            </Tooltip>
            <Tooltip title="Delete Pilot" arrow>
              <button className="test delete-button" onClick={handleDelete}>Delete Pilot</button>
            </Tooltip>
          </div>
        </div>
        <div className="test section2">
          <div className="test section2-left">
            <div className="test input">
              <Lable 
                title='First Name'
              />
              <DashboardTextfield 
                type='text'
                name='fname'
                value={formData?.fname || ''}
                placeholder='Enter pilot first name'
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
                value={formData?.age || ''}
                placeholder='Enter pilot age'
                onChange={handleChange}
              />
            </div>
            <div className="test input">
              <Lable 
                title='Mobile Number'
              />
              <DashboardTextfield 
                type='text'
                name='image'
                value={formData?.mobile || ''}
                placeholder='Give pilot mobile number'
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
                value={formData?.company || ''}
                placeholder='Enter pilot company name'
                onChange={handleChange}
              />
            </div>
            <div className="test input">
              <Lable 
                title='Employee Number'
              />
              <DashboardTextfield 
                type='text'
                name='employee_id'
                value={formData?.employee_id || ''}
                placeholder='Enter pilot company name'
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="test section2-right">
            <div className="test input">
              <Lable 
                title='Last Name'
              />
              <DashboardTextfield 
                type='text'
                name='lname'
                value={formData?.lname || ''}
                placeholder='Enter pilot last name'
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
                value={formData?.email || ''}
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
                value={formData?.address || ''}
                placeholder='Enter your address'
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
                value={formData?.position || ''}
                placeholder='Enter your position'
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  );

}

export default SinglePilot;