import React, { useState } from 'react';
import './ProjectCreationForm.css';
import strings from '../../utils/strings';

function ProjectCreationForm({ onSubmit }) {
  const [project, setProject] = useState({
  projectname: '',
  owner_id: '',
  description: '',
  created_on: '',
  updated_on: '',
  members:'',
  status: '',
  type: '',
  active: true,
  projectid: '',
  tasks: []
});

const handleChange = (e) => {
  setProject({ ...project, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
  e.preventDefault();
  const projects = JSON.parse(localStorage.getItem('projects')) || [];
  const newProject = {
    ...project,
    projectid: `proj_${projects.length + 1}`, // Generate project id
    created_on: new Date().getTime(),
    updated_on: new Date().getTime(),
    tasks: [], // Initialize tasks as an empty array
  };
  projects.push(newProject);
  localStorage.setItem('projects', JSON.stringify(projects));
  // Clear form fields after submission
  setProject({
    projectname: '',
    owner_id: '',
    description: '',
    created_on: '',
    updated_on: '',
    members:'',
    status: '',
    type: '',
    active: true,
    projectid: '',
    tasks: [],
  });
   window.location.href = "/home";
  };

  return (
    <form onSubmit={handleSubmit} className="form-grid">
      <label>
        {strings.projectName}
        <input type="text" name="projectname" onChange={handleChange} />
      </label>
      <label>
        {strings.projectOwner}
        <input type="text" name="owner_id" onChange={handleChange} />
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
    </form>
  );
}

export default ProjectCreationForm;
