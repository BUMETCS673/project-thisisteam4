import './ProjectCard.css';
const ProjectCard = ({ project, taskCount}) => {
  return (
    <section className="projectCard" role="article">
      <header>
        <h3>{project.projectname}</h3>
        <div>
          <ul>
            {' '}
            {/* {project.groupMembers.map((member, index) => (
              <li key={index}>{member.charAt(0)}</li>
            ))} */}
            <li>{project.owner_id}</li>
          </ul>
        </div>
      </header>
      <main>
        <div className="scrollable-content">
          <p>PROJECT TYPE: {project.type}</p>
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
