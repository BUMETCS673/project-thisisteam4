import React, { useState, useEffect } from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import './Home.css';
import ProjectModal from '../../components/ProjectModal/ProjectModal';

const Home = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectTasks, setProjectTasks] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [projects, setProjects] = useState([]);
  const initalProjects = [
    {
      projectname: "Project Alpha",
      description: "This is a test 1 project.",
      owner_id: "Matilda",
      created_on: 1718478356,
      updated_on: 1718478356,
      memebers:["Amber", "Nicole", "Stevie"],
      status: "ongoing",
      type: "development",
      active: true,
      projectid: "proj_001",
      tasks: [
        { title: 'Task 1', member: 'Charlie' },
        { title: 'Task 2', member: 'Dave' },
      ]
    },
    {
      projectname: "Project Beta",
      description: "This is a test 2 project.",
      owner_id: "Melissa",
      created_on: 1718478356,
      updated_on: 1718478356,
      memebers:["Tracey", "Nancy", "Shawn"],
      status: "ongoing",
      type: "development",
      active: true,
      projectid: "proj_002",
      tasks: [
        { title: 'Task 1', member: 'Alice' },
        { title: 'Task 2', member: 'Bob' },
      ]
    },
    {
      projectname: "Project Gamma",
      description: "This is a test 3 project.",
      owner_id: "Ben",
      created_on: 1718478356,
      updated_on: 1718478356,
      memebers:["Matt", "Willow"],
      status: "ongoing",
      type: "development",
      active: true,
      projectid: "proj_003",
      tasks: [
        { title: 'Task 1', member: 'Alice' },
        { title: 'Task 2', member: 'Bob' },
      ]
    },
    {
      projectname: "Project Theta",
      description: "This is a test 4 project.",
      owner_id: "Jack",
      created_on: 1718478356,
      updated_on: 1718478356,
      memebers:["Lewis", "David"],
      status: "ongoing",
      type: "development",
      active: true,
      projectid: "proj_004",
      tasks: [
        { title: 'Task 1', member: 'Alice' },
        { title: 'Task 2', member: 'Bob' },
      ]
    }
  ];

useEffect(()=> {
  const storedProjects = JSON.parse(localStorage.getItem('projects'));
  const projectsToSet = storedProjects || initalProjects;

  setProjects(projectsToSet);

  if (!storedProjects) {
    localStorage.setItem('projects', JSON.stringify(initalProjects));
    }
},[])

const handleCreateProject = (newProject) => {
  setProjects([...projects, newProject]); // Add new project to projects list
};
useEffect(() => {
  const initialTasks = {};
  projects.forEach(project => {
    initialTasks[project.projectid] = project.tasks;
  });
  setProjectTasks(initialTasks);
}, [projects]);

  const handleModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const handleAddTask = (projectId, newTask) => {
    setProjectTasks(prevTasks => {
      const updatedTasks = {
        ...prevTasks,
        [projectId]: [...(prevTasks[projectId] || []), newTask]
      };
      return updatedTasks;
    });
  };

  useEffect(() => {
    const initialTasks = {};
    projects.forEach(project => {
      initialTasks[project.projectid] = project.tasks;
    });
    setProjectTasks(initialTasks);
  }, []);

  const filteredProjects = projects.filter(project => 
    project.projectname.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="dashboard-section">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <h2>({filteredProjects.length}) Projects</h2>
      <section className="projects-container">
          {filteredProjects.map((project, i) => (
          <div key={i} onClick={() => handleModal(project)}>
            <ProjectCard
              project={project}
              taskCount={projectTasks[project.projectid]?.length || 0}
            />
          </div>
        ))}
      </section>
      {selectedProject && (
        <div className="modal">
          <div className="modal-content">
            <ProjectModal  
              projectname={selectedProject.projectname}
              className={selectedProject.className}
              owner_id={selectedProject.owner_id}
              description={selectedProject.description}
              members={selectedProject.memebers}
              tasks={projectTasks[selectedProject.projectid] || []}
              closeModal={closeModal}
              onAddTask={(newTask) => handleAddTask(selectedProject.projectid, newTask)}
            />
          </div>
        </div>
      )}
    </main>
  );
};

export default Home;