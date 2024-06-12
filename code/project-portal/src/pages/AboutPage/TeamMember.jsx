import React from 'react';

const TeamMember = ({ title, description, avatar }) => {
  return (
    <div>
      <img src={avatar} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default TeamMember;
