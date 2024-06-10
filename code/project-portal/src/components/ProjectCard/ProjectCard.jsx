import "./ProjectCard.css"
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