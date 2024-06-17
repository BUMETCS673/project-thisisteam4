import { useState } from 'react';
import "./TaskForm.css"

const TaskForm = ({ onAddTask }) => {
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskMember, setNewTaskMember] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTaskTitle && newTaskMember) {
      onAddTask({ title: newTaskTitle, member: newTaskMember });
      console.log
      setNewTaskTitle('');
      setNewTaskMember('');
    }
  };

  return (
    <li >
      
      <form onSubmit={handleSubmit} className="new-task-form">
        {/* <div> */}
        <h4><b>Add New Task</b></h4>
        <input
          type="text"
          placeholder="Task Title"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Member Name"
          value={newTaskMember}
          onChange={(e) => setNewTaskMember(e.target.value)}
          required
        />
      {/* </div> */}
        <button type="submit">Add Task</button>
      </form>
    </li>
  );
};

export default TaskForm;
