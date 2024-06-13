import React from 'react';
import brenna from '../../assets/images/brenna.png';
import brooke from '../../assets/images/brooke.png';
import lillian from '../../assets/images/lillian.png';
import fehmi from '../../assets/images/fehmi.png';
import nati from '../../assets/images/nati.png';
import './About.css';

const About = () => {
  const teamMembers = [
    {
      title: 'Brenna Mahn',
      description: 'Team Lead',
      avatar: brenna,
    },
    {
      title: 'Fehmi Baltaci',
      description: 'QA Lead',
      avatar: fehmi,
    },
    {
      title: 'Savien (Brooke) Love',
      description: 'Design and Implementation Lead',
      avatar: brooke,
    },
    {
      title: 'Pinwen Mu',
      description: 'Configuration Lead',
      avatar: lillian,
    },

    {
      title: 'Natanim Eibrahim',
      description: 'Security Lead',
      avatar: nati,
    },
  ];

  return (
    <div className="about">
      <h1>About Us</h1>
      <p>
        Welcome to Project Portal, an innovative platform designed to enhance
        project-based learning for both teachers and students. Our mission is to
        streamline the process of project creation, student assignment, and task
        management, enabling a more effective and engaging educational
        experience.
      </p>
      <h1>Mission Statement</h1>
      <p>
        We believe that hands-on projects are a vital part of education. Our
        goal is to provide educators with the tools they need to create, manage,
        and monitor projects with ease. We strive to empower students by giving
        them clear tasks and objectives, fostering collaboration, and ensuring
        that learning is both productive and enjoyable.
      </p>
      <h1>The Frontend Team</h1>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img
              src={member.avatar}
              alt={member.title}
              className="team-member-avatar"
            />
            <h2>{member.title}</h2>
            <p>{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
