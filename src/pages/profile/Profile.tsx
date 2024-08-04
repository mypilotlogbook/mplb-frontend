import React from 'react';
import './Profile.scss';
import PageHeader from '../../components/page-header/PageHeader';

const Profile = () => {
  return (
    <div className='test profile'>
      <PageHeader
        title='Profile'
        subTitle='Here is your profile. Update and manage your profile details.'
      />
    </div>
  )
}

export default Profile