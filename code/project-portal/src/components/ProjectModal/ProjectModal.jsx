import TaskForm from "../TaskForm/TaskForm";
import "./ProjectModal.css"
import { useState, useEffect } from "react";
const ProjectModal = ({projectname, className, owner_id, description, tasks, closeModal, onAddTask}) => {
    const [completedTasks, setCompletedTasks] = useState([]);
    const [taskList, setTaskList] = useState(tasks); // Use state to manage task list

    // const toggleTaskCompletion = (i) => {
    //     if (completedTasks.includes(i)) {
    //         setCompletedTasks(completedTasks.filter(taskIndex => taskIndex !== i));
    //     } else {
    //         setCompletedTasks([...completedTasks, i]);
    //     }
    // }
    const toggleTaskCompletion = (i) => {
        const updatedCompletedTasks = [...completedTasks];
        if (updatedCompletedTasks.includes(i)) {
          updatedCompletedTasks.splice(updatedCompletedTasks.indexOf(i), 1);
        } else {
          updatedCompletedTasks.push(i);
        }
        setCompletedTasks(updatedCompletedTasks);
        localStorage.setItem("completedTasks", JSON.stringify(updatedCompletedTasks)); // Update localStorage
    };

    const handleAddTask = (newTask) => {
        onAddTask(newTask);
        setTaskList([...taskList, newTask]);
    }

    useEffect(() => {
        const storedCompletedTasks = localStorage.getItem("completedTasks");
        if (storedCompletedTasks) {
          setCompletedTasks(JSON.parse(storedCompletedTasks));
        } else {
          setCompletedTasks([]);
        }
      }, [tasks]);

    return(
        <section className="project-modal">
              <section className="transparent-section"></section>
              <aside>
                    <header>
                        <button onClick={closeModal}>Close</button>
                        <div>
                            <h1>{projectname}</h1>
                            {/* <h3>{owner_id}</h3> */}
                        </div>
                    </header>
                    <main>
                        <h3>MEMBERS</h3>
                        <ul>
                        {/* {groupMembers.map((member, i) => (
                            <li className="groupMember" key={i}>{member.charAt(0)}</li>
                        ))}   */}
                        <li className="groupMember">{owner_id}</li>
                        </ul>
                        {description}
                    </main>
                    <footer>
                    <div className="task-header">
                        <h4><b>Total Tasks:</b> {taskList.length}</h4>
                        <h4><b>Completed Tasks:</b> {completedTasks.length}</h4>
                    </div>
                    <ul>
                        {taskList.map((task, i) => (
                            <li key={i} className={`task ${completedTasks.includes(i) ? 'completed' : ''}` } >
                                <h6>{task.title}</h6>
                                <div>
                                    <p className="groupMember">{task.member.charAt(0)}</p>
                                    <input type="checkbox" checked={completedTasks.includes(i)} onClick={() => toggleTaskCompletion(i)}/>
                                </div>
                            </li>
                        ))}
                        <li><TaskForm onAddTask={handleAddTask}/></li>
                    </ul>
                   
                    </footer>
              </aside>
        </section>
    )
} 

export default ProjectModal;