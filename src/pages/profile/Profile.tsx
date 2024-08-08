import React from 'react';
import './Profile.scss';
import PageHeader from '../../components/page-header/PageHeader';
import { Tooltip } from '@mui/material';
import Textfield from '../../components/textfield/Textfield';
import Lable from '../../components/lable/Lable';

const Profile = () => {
  return (
    <div className='profile'>
      <PageHeader
        title='Profile'
        subTitle='Here is your profile. Update and manage your profile details.'
      />
      <div className="profile-section">
        <div className="banner"></div>
        <div className="name-container">
          <div className="test name-container-left">
            <div className="test profile-image-container">
              <Tooltip title="Profile Image" arrow>
                <img src="https://res.cloudinary.com/dv9ax00l4/image/upload/v1722707589/profile-photo_lxgabd.avif" alt="profile-img" className="test profile-image" />
              </Tooltip>
            </div>
          </div>
          <div className="test name-container-right">
            <Tooltip title="User Name" arrow>
              <h1 className="test name">Jeral Sandeeptha</h1>
            </Tooltip>
            <Tooltip title="User Id" arrow>
              <h5 className="test userId">66a12d5b7c80a1687211c0a9</h5>
            </Tooltip>
          </div>
        </div>
        <div className="test user-description-section">
          <h3 className="test email">jeral.sandeeptha1@gmail.com</h3>
          <h6 className="test description">This is my profile. This is my description. Update your user profile and details here.</h6>
        </div>
        <div className="test section1">
          <div className="test section1-left">
            <h3 className="test lable">Your Profile</h3>
            <h6 className="test sub-lable">Update your user profile and details here</h6>
          </div>
          <div className="test section1-right">
            <Tooltip title="Click here to save your changes" arrow>
              <button className="test save-button">Save Changes</button>
            </Tooltip>
          </div>
        </div>
        <div className="test section2">
          <div className="test section2-left">
            <div className="test input">
              <Lable 
                title='First Name'
              />
              <Textfield 
                type='text'
                value='Jeral'
                placeholder='Enter your first name'
                onChange={() => {}}
              />
            </div>
            <div className="test input">
              <Lable 
                title='Age'
              />
              <Textfield 
                type='text'
                value='24'
                placeholder='Enter your age'
                onChange={() => {}}
              />
            </div>
            <div className="test input">
              <Lable 
                title='Profile Image'
              />
              <Textfield 
                type='text'
                value=''
                placeholder='Give your profile image url / link'
                onChange={() => {}}
              />
            </div>
            <div className="test input">
              <Lable 
                title='Company'
              />
              <Textfield 
                type='text'
                value='Sri Lankan Airlines'
                placeholder='Enter your company name'
                onChange={() => {}}
              />
            </div>
          </div>
          <div className="test section2-right">
            <div className="test input">
              <Lable 
                title='Last Name'
              />
              <Textfield 
                type='text'
                value='Sandeeptha'
                placeholder='Enter your last name'
                onChange={() => {}}
              />
            </div>
            <div className="test input">
              <Lable 
                title='Country'
              />
              <Textfield 
                type='text'
                value='Sri Lanka'
                placeholder='Enter your country name'
                onChange={() => {}}
              />
            </div>
            <div className="test input">
              <Lable 
                title='Description'
              />
              <Textfield 
                type='text'
                value='This is my description'
                placeholder='Enter your description'
                onChange={() => {}}
              />
            </div>
            <div className="test input">
              <Lable 
                title='Position'
              />
              <Textfield 
                type='text'
                value='Senior Pilot'
                placeholder='Enter your position'
                onChange={() => {}}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
