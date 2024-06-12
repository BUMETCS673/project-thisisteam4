import React, { useState } from 'react';
<<<<<<< HEAD
import './ProjectCreationForm.css';
import strings from '../../utils/strings';

function createNewProject() {
  return {
=======
import "./ProjectCreationForm.css"


function ProjectCreationForm() {
  const [project, setProject] = useState({
>>>>>>> main
    name: '',
    owner: '',
    members: '',
    description: '',
    creationDate: '',
    type: '',
    status: '',
<<<<<<< HEAD
    completionDate: '',
  };
}

function ProjectCreationForm({ onSubmit }) {
  const [project, setProject] = useState(createNewProject());
=======
    completionDate: ''
  });

>>>>>>> main

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

<<<<<<< HEAD
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(project);
    onSubmit && onSubmit(project);
  };

  return (
    <form onSubmit={handleSubmit} className="form-grid">
      <label>
        {strings.projectName}
        <input type="text" name="name" onChange={handleChange} />
      </label>
      <label>
        {strings.projectOwner}
        <input type="text" name="owner" onChange={handleChange} />
      </label>
      <label>
        {strings.projectMembers}
        <input type="text" name="members" onChange={handleChange} />
      </label>
      <label>
        {strings.projectDescription}
        <textarea name="description" onChange={handleChange} />
      </label>
      <label>
        {strings.projectCreationDate}
        <input type="date" name="creationDate" onChange={handleChange} />
      </label>
      <label>
        {strings.projectType}
        <input type="text" name="type" onChange={handleChange} />
      </label>
      <label>
        {strings.projectStatus}
        <input type="text" name="status" onChange={handleChange} />
      </label>
      <label>
        {strings.projectCompletionDate}
        <input type="date" name="completionDate" onChange={handleChange} />
      </label>
      <button type="submit" className="submit-button">
        {strings.createProjectButton}
      </button>
=======

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(project);
  };


  return (
    <form onSubmit={handleSubmit} className="form-grid">
      <label>
        Project Name:
        <input type="text" name="name" onChange={handleChange} />
      </label>
      <label>
        Project Owner:
        <input type="text" name="owner" onChange={handleChange} />
      </label>
      <label>
        Project Members:
        <input type="text" name="members" onChange={handleChange} />
      </label>
      <label>
        Description:
        <textarea name="description" onChange={handleChange} />
      </label>
      <label>
        Date of Creation:
        <input type="date" name="creationDate" onChange={handleChange} />
      </label>
      <label>
        Type of Project:
        <input type="text" name="type" onChange={handleChange} />
      </label>
      <label>
        Status:
        <input type="text" name="status" onChange={handleChange} />
      </label>
      <label>
        Date of Completion:
        <input type="date" name="completionDate" onChange={handleChange} />
      </label>
      <button type="submit">Create Project</button>
>>>>>>> main
    </form>
  );
}

<<<<<<< HEAD
=======

>>>>>>> main
export default ProjectCreationForm;
