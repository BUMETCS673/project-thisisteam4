import { useEffect } from "react";
import ProjectCreationForm from "./ProjectCreationForm";
import "./FormCard.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProjectCreationFormCard = ({ handleSubmit }) => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/auth");
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null; // or render a loading spinner or message
  }

  return (
    <section className="formCard">
      <header>
        <h3>ADD A PROJECT</h3>
      </header>
      <main>
        <ProjectCreationForm onSubmit={handleSubmit} />
      </main>
    </section>
  );
};

export default ProjectCreationFormCard;
