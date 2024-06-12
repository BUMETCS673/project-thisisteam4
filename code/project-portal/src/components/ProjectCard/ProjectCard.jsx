import "./ProjectCard.css"
<<<<<<< HEAD
const ProjectCard = ({project}) => {
    return(
        <section className="projectCard" role="article">
            <header>
                <h3>{project.title}</h3>
                <div>
                <ul> {project.groupMembers.map((member, index) => (
                        <li key={index}>{member.charAt(0)}</li>
                    ))}
                </ul>
                </div>
            </header>
            <main>
                <div className="scrollable-content">
                <p>{project.description}</p>
=======
const ProjectCard = () => {
    return(
        <section className="projectCard">
            <header>
                <h3>TITLE</h3>
                <h6>Group Members</h6>
            </header>
            <main>
                <div className="scrollable-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
>>>>>>> main
                </div>
            </main>
            <footer>
                <p>Total Task Percentage</p>
                {/* progress bar */}
            </footer>
        </section>
    )
} 

export default ProjectCard