import React from 'react';
import ProjectCreationForm from './ProjectCreationForm';
import './FormCard.css';

const ProjectCreationFormCard = ({ handleSubmit }) => {
  return (
    <section className="formCard">
      <header>
        <h3>ADD A PROJECT</h3>
      </header>
      <main>
        <ProjectCreationForm onSubmit={handleSubmit} />
      </main>
    </section>
  );
};

export default ProjectCreationFormCard;
