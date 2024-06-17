import ProjectCard from '../../components/ProjectCard/ProjectCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import { useState, useEffect } from 'react';
import './Dashboard.css';
import ProjectModal from '../../components/ProjectModal/ProjectModal';
//import { getAllProjects } from '../../utils/actions';

const Dashboard = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectTasks, setProjectTasks] = useState({});

  // useEffect(() => {
    // Fetch project data when the component mounts
    // const fetchProjects = () => {
    //   try {
    //     const projectData = getAllProjects();
    //     console.log(projectData) //results in promise pending because of CORS
    //     setAllProjects(projectData);
    //   } catch (error) {
    //     setError('Failed to fetch projects. Please try again later.');
    //     console.error('Error fetching projects:', error);
    //   }
    // };

  //   fetchProjects();
  // }, []);

  

  // this is where we would fetch the project data using fetch request
  const projects = [
    {projectname:	"Project Alpha",
    description:"This is a test 1 project.",
    owner_id: 1,
    created_on:	1718478356,
    updated_on:	1718478356,
    status:"ongoing",
    type:"development",
    active:true,
    projectid:	"proj_001",
    tasks: [
      { title: 'Task 1', member: 'Charlie' },
      { title: 'Task 2', member: 'Dave' },
    ]},
  
    {
    projectname:	"Project Beta",
    description:"This is a test 2 project.",
    owner_id:	1,
    created_on:	1718478356,
    updated_on:1718478356,
    status:	"ongoing",
    type:"development", 
    active:true,
    projectid:	"proj_002",  
    tasks: [
      { title: 'Task 1', member: 'Alice' },
      { title: 'Task 2', member: 'Bob' },
    ]},
  
   { projectname:	"Project Gamma",
    description:	"This is a test 3 project.",
    owner_id:	2,
    created_on:	1718478356,
    updated_on:	1718478356,
    status:	"ongoing",
    type:	"development",
    active:true, 
    projectid:	"proj_003",
    tasks: [
      { title: 'Task 1', member: 'Alice' },
      { title: 'Task 2', member: 'Bob' },
    ]
  },
   { projectname:	"Project Theta",
    description:	"This is a test 4 project.",
    owner_id:	2,
    created_on:	1718478356,
    updated_on:	1718478356,
    status:	"ongoing",
    type:	"development",
    active:	true,
    projectidz:	"proj_004", 
    tasks: [
      { title: 'Task 1', member: 'Alice' },
      { title: 'Task 2', member: 'Bob' },
    ]}
  ];
  const handleModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const handleAddTask = (projectId, newTask) => {
    setProjectTasks(prevTasks => ({
      ...prevTasks,
      [projectId]: [...prevTasks[projectId], newTask]
    }));
  };

  useEffect(() => {
    // total number of tasks
    const initialTasks = {};
    projects.forEach(project => {
      initialTasks[project.projectid] = project.tasks;
    });
    setProjectTasks(initialTasks);
  }, []);
  
  return (
    <main className="dashboard-section">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {/* total amount of projects on page */}
      <h2>({filteredProjects.length}) Projects</h2>
      <section className="projects-container">
        {filteredProjects.map((project, i) => (
          <div key={i} onClick={() => handleModal(project)}>
            <ProjectCard project={project} taskCount={projectTasks[project.projectid]?.length || 0}/>
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
              tasks={projectTasks[selectedProject.projectid] || []}
              closeModal={closeModal}
              onAddTask={(newTask) => handleAddTask(selectedProject.projectid, newTask)} />
          </div>
        </div>
      )}
    </main>
  );
};

export default Dashboard;
