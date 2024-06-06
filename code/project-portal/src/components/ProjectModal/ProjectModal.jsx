import "./ProjectModal.css"
import { useState } from "react";
const ProjectModal = ({title, className, groupMembers, description, tasks, closeModal}) => {
    const [completedTasks, setCompletedTasks] = useState([]);

    const toggleTaskCompletion = (i) => {
        if (completedTasks.includes(i)) {
            setCompletedTasks(completedTasks.filter(taskIndex => taskIndex !== i));
        } else {
            setCompletedTasks([...completedTasks, i]);
        }
    }


    return(
        <section className="project-modal">
              <section className="transparent-section"></section>
              <aside>
                    <header>
                        <button onClick={closeModal}>Close</button>
                        <div>
                            <h1>{title}</h1>
                            <h3>{className}</h3>
                        </div>
                    </header>
                    <main>
                        <h3>MEMBERS</h3>
                        <ul>
                        {groupMembers.map((member, i) => (
                            <li className="groupMember" key={i}>{member.charAt(0)}</li>
                        ))}  
                        </ul>
                        {description}
                    </main>
                    <footer>
                    <ul>
                        {tasks.map((task, i) => (
                            <li key={i} className={`task ${completedTasks.includes(i) ? 'completed' : ''}` } >
                                <h6>{task.title}</h6>
                                <div>
                                    <p className="groupMember">{task.member.charAt(0)}</p>
                                    <input type="checkbox" onClick={() => toggleTaskCompletion(i)}/>
                                </div>
                            </li>
                        ))}
                    </ul>
                    </footer>
              </aside>
        </section>
    )
} 

export default ProjectModal;