import ProjectCard from "../../components/ProjectCard/ProjectCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Dashboard.css"
const Dashboard= () => {
    let cards = [];
    let renderProjectCards = () => {
        for(let i = 0; i < 5; i++){
            cards.push(<ProjectCard key={i} />);

        }
    }
    renderProjectCards()
    return(
        <main>
<<<<<<< HEAD
<<<<<<< HEAD
            <SearchBar/>
            {/* total amount of projects on page */}
            <h2>({cards.length}) Projects</h2>
            <section className="projects-container">
                {cards}
            </section>
=======
=======
>>>>>>> 6e957904647dee280ad39b5f93dcb35a542d7119
        <h1>Dashboard Route</h1>
        <a>Go Back to Home</a>
>>>>>>> 6e95790 (project creation form)
        </main>
    )
} 

export default Dashboard;