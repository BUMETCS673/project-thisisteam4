import React, { useState } from 'react';
import './ProjectCreationForm.css';
import strings from '../../utils/strings';

function createNewProject() {
  return {
    name: '',
    owner: '',
    members: '',
    description: '',
    creationDate: '',
    type: '',
    status: '',
    completionDate: '',
  };
}

function ProjectCreationForm({ onSubmit }) {
  const [project, setProject] = useState(createNewProject());

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

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
      <button type="submit">{strings.createProjectButton}</button>
    </form>
  );
}

export default ProjectCreationForm;
