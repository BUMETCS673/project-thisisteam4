import './ProjectCard.css';
const ProjectCard = ({ project, taskCount}) => {
  console.log('Rendering ProjectCard for:', project.projectname);
  return (
    <section className="projectCard" role="article">
      <header>
        <section>
        <h3>{project.projectname}</h3>
        <h6>PROJECT TYPE: {project.type}</h6>
        </section>
        <div>
          <ul>
            <li>{project.owner_id.charAt(0)}</li>
          </ul>
        </div>
      </header>
      <main>
        <div className="scrollable-content">
        
          <p>{project.description}</p>
        </div>
      </main>
      <footer>
        <p>Total Tasks Created: {taskCount}</p>
        {/* progress bar */}
      </footer>
    </section>
  );
};

export default ProjectCard;
