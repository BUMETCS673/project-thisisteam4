import React, { useEffect } from "react";
import profile from "../../assets/images/profile.svg";
import { useSelector } from "react-redux";
import "./Profile.css";
import Title from "./../../components/Title/Title";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const user = useSelector((state) => state.user.user);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/auth");
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null; // or render a loading spinner or message
  }

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
