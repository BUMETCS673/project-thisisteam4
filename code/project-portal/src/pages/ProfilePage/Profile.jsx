import React from 'react';
import profile from '../../assets/images/profile.svg';
import { useSelector } from 'react-redux';
import './Profile.css';

const ProfilePage = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <div>
      <img src={profile} alt="Profile" className="profile" />
      <h1>My Profile</h1>
      <h2>Email: {user.username}</h2>
    </div>
  );
};

export default ProfilePage;
