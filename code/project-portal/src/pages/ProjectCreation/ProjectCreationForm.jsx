import React, { useState } from 'react';
import "./ProjectCreationForm.css"

function ProjectCreationForm() {
  const [project, setProject] = useState({
    name: '',
    owner: '',
    members: '',
    description: '',
    creationDate: '',
    type: '',
    status: '',
    completionDate: ''
  });

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

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
    </form>
  );
}

export default ProjectCreationForm;