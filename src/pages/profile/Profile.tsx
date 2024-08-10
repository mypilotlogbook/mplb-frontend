import React, { useContext, useEffect, useState } from 'react';
import './Profile.scss';
import PageHeader from '../../components/page-header/PageHeader';
import { Tooltip } from '@mui/material';
import Textfield from '../../components/textfield/Textfield';
import Lable from '../../components/lable/Lable';
import { UpdateUser, User } from '../../typescript/interfaces/interface';
import getSingleUser from '../../api/user-endpoints/getSingleUser';
import { IdContext } from '../../context/UserIdContext';
import DashboardTextfield from '../../components/dashboard-textfield/DashboardTextfield';
import updateUser from '../../api/user-endpoints/updateUser';
import Alert from '../../components/alert/Alert';

const Profile = () => {

  const [user, setUser] = useState<User | undefined>(undefined); 
  const [formData, setFormData] = useState<UpdateUser>();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [statusCode, setStatusCode] = useState(0);
  const [message, setMessage] = useState('');

  const idContext = useContext(IdContext);
  const id = idContext?.id;
  if (!id) {
    throw new Error('Id context is not available');
  } 

  const handleUpdateUser = () => {
    updateUser({
      id: id,
      setUser: setUser,
      setFormData: setFormData,
      formData: formData,
      setError: setError,
      setSuccess: setSuccess,
      setMessage: setMessage,
      setStatusCode: setStatusCode,
      getSingleUser: getSingleUser
    });
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const getUserInfor = () => {
    getSingleUser({
      setUser: setUser,
      setFormData: setFormData,
      id: id
    });
  }

  useEffect(() => {
    getUserInfor();
  }, []);

  return (
    <div className='profile'>
      <PageHeader
        title='Profile'
        subTitle='Here is your profile. Update and manage your profile details.'
      />

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

      <div className="profile-section">
        <div className="banner"></div>
        <div className="name-container">
          <div className="test name-container-left">
            <div className="test profile-image-container">
              <Tooltip title="Profile Image" arrow>
                <img src={user?.image} alt="profile-img" className="test profile-image" />
              </Tooltip>
            </div>
          </div>
          <div className="test name-container-right">
            <Tooltip title="User Name" arrow>
              <h1 className="test name">{ user?.fname && user?.lname ? `${user?.fname} ${user?.lname}` : user?.email }</h1>
            </Tooltip>
            <Tooltip title="User Id" arrow>
              <h5 className="test userId">{ user?._id }</h5>
            </Tooltip>
          </div>
        </div>
        <div className="test user-description-section">
          <h3 className="test email">{ user?.email }</h3>
          <h6 className="test description">{ user?.description ? user?.description : 'Update your description to show here' }</h6>
        </div>
        <div className="test section1">
          <div className="test section1-left">
            <h3 className="test lable">Your Profile</h3>
            <h6 className="test sub-lable">Update your user profile and details here</h6>
          </div>
          <div className="test section1-right">
            <Tooltip title="Click here to save your changes" arrow>
              <button className="test save-button" onClick={handleUpdateUser}>Save Changes</button>
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
                placeholder='Enter your first name'
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
                placeholder='Enter your age'
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
                value={formData?.image || ''}
                placeholder='Give your profile image url / link'
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
                placeholder='Enter your company name'
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
                placeholder='Enter your last name'
                onChange={handleChange}
              />
            </div>
            <div className="test input">
              <Lable 
                title='Country'
              />
              <DashboardTextfield 
                type='text'
                name='country'
                value={formData?.country || ''}
                placeholder='Enter your country name'
                onChange={handleChange}
              />
            </div>
            <div className="test input">
              <Lable 
                title='Description'
              />
              <DashboardTextfield 
                type='text'
                name='description'
                value={formData?.description || ''}
                placeholder='Enter your description'
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

export default Profile;
