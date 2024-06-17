import React from "react";
import profile from "../../assets/images/profile.svg";
import { useSelector } from "react-redux";
import "./Profile.css";
import Title from "./../../components/Title/Title";

const ProfilePage = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <div className="profileContainer">
      <img src={user.picture || profile} alt="Profile" className="profile" />
      <Title text="My Profile" />
      <h2>Email: {user.email || user.username}</h2>
      <h2>Full Name: {user.name || `${user.firstName} ${user.lastName}`} </h2>
    </div>
  );
};

export default ProfilePage;
