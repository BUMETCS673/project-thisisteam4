import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Navbar from "../../components/Navbar/Navbar"
import SearchBar from "../../components/SearchBar/SearchBar";
import {useState} from "react";
import "./Dashboard.css"
import ProjectModal from "../../components/ProjectModal/ProjectModal";
const Dashboard= () => {
    const [selectedProject, setSelectedProject] = useState(null);

    // this is where we would fetch the project data using fetch request
    const projects = [
        {
            title: "Project 1",
            className: "Class A",
            groupMembers: ["Alice", "Bob", "Charlie"],
            description: "This project focuses on developing a new AI algorithm.",
            tasks: [
                { title: "Research AI techniques", member: "Alice" },
                { title: "Develop prototype", member: "Bob" },
                { title: "Test algorithm", member: "Charlie" }
            ]
        },
        {
            title: "Project 2",
            className: "Class B",
            groupMembers: ["Dave", "Eve", "Frank"],
            description: "This project is about building a responsive web application.",
            tasks: [
                { title: "Design UI", member: "Dave" },
                { title: "Implement frontend", member: "Eve" },
                { title: "Set up backend", member: "Frank" }
            ]
        },
        {
            title: "Project 3",
            className: "Class C",
            groupMembers: ["Grace", "Heidi", "Ivan"],
            description: "This project aims to create a mobile app for task management.",
            tasks: [
                { title: "Create wireframes", member: "Grace" },
                { title: "Develop mobile app", member: "Heidi" },
                { title: "Conduct user testing", member: "Ivan" }
            ]
        },
        {
            title: "Project 4",
            className: "Class D",
            groupMembers: ["Jack", "Kathy", "Leo"],
            description: "This project involves setting up a cloud infrastructure.",
            tasks: [
                { title: "Set up cloud servers", member: "Jack" },
                { title: "Configure security", member: "Kathy" },
                { title: "Deploy applications", member: "Leo" }
            ]
        },
        {
            title: "Project 5",
            className: "Class E",
            groupMembers: ["Mona", "Nate", "Olivia"],
            description: "This project is focused on data analysis and visualization.",
            tasks: [
                { title: "Collect data", member: "Mona" },
                { title: "Analyze data", member: "Nate" },
                { title: "Create visualizations", member: "Olivia" }
            ]
        },
        {
            title: "Project 6",
            className: "Class F",
            groupMembers: ["Paul", "Quincy", "Rachel"],
            description: "This project aims to develop a machine learning model.",
            tasks: [
                { title: "Gather training data", member: "Paul" },
                { title: "Train model", member: "Quincy" },
                { title: "Evaluate model", member: "Rachel" }
            ]
        },
        {
            title: "Project 7",
            className: "Class G",
            groupMembers: ["Steve", "Tina", "Uma"],
            description: "This project focuses on cybersecurity enhancements.",
            tasks: [
                { title: "Assess vulnerabilities", member: "Steve" },
                { title: "Implement security measures", member: "Tina" },
                { title: "Perform security tests", member: "Uma" }
            ]
        },
        {
            title: "Project 8",
            className: "Class H",
            groupMembers: ["Victor", "Wendy", "Xander"],
            description: "This project involves developing a blockchain application.",
            tasks: [
                { title: "Research blockchain technology", member: "Victor" },
                { title: "Develop smart contracts", member: "Wendy" },
                { title: "Test blockchain application", member: "Xander" }
            ]
        },
        {
            title: "Project 9",
            className: "Class I",
            groupMembers: ["Yara", "Zane", "Alex"],
            description: "This project is about creating an IoT solution.",
            tasks: [
                { title: "Design IoT devices", member: "Yara" },
                { title: "Develop firmware", member: "Zane" },
                { title: "Integrate with cloud", member: "Alex" }
            ]
        },
        {
            title: "Project 10",
            className: "Class J",
            groupMembers: ["Ben", "Cathy", "Daniel"],
            description: "This project aims to enhance an existing software product.",
            tasks: [
                { title: "Gather requirements", member: "Ben" },
                { title: "Develop new features", member: "Cathy" },
                { title: "Perform regression testing", member: "Daniel" }
            ]
        }
    ];
    const handleModal = (project) => {
        setSelectedProject(project);
    }
    const closeModal = () => {
        setSelectedProject(null);
    }
    return(
        <main className="dashboard-section">
            <SearchBar/>
            {/* total amount of projects on page */}
            <h2>({projects.length}) Projects</h2>
            <section className="projects-container">
                {projects.map((project,i) => (
                    <div key={i} onClick={()=> handleModal(project)}>
                        <ProjectCard project={project}/>
                    </div>
                ))}
            </section>
            {selectedProject && (
                <div className="modal">
                    <div className="modal-content">
                        {/* <button onClick={closeModal}>Close</button> */}
                        <ProjectModal {...selectedProject} closeModal={closeModal}/>
                    </div>
                </div>
            )}
        </main>
    )
} 

export default Dashboard;