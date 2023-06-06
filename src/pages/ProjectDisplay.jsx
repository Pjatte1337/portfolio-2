// Import react components
import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import { Helmet } from "react-helmet";

// Import styling for this page
import "../styles/ProjectDisplay.css";
import "../styles/Button.css";

//Getting value from ProjectList
function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  const handleButtonClick = (url) => {
    window.location.href = url;
  };

  return (
    <div className="project">
      <Helmet>
        <title>Joakim | {project.name}</title>
        <meta
          name="description"
          content="specified information about the project"
        />
      </Helmet>
      <div className="show">
        <h1>{project.name}</h1>
        <img src={project.image} alt="description" />
      </div>
      <div className="project-info">
        <h2 className="head">Description:</h2>
        <p className="des">{project.description}</p>
      </div>
      <div className="project-tools">
        <h2 className="head">Tools used:</h2>
        <p className="des">{project.tools}</p>
      </div>
      <div className="project-links">
        <h2 className="head">Links for the project:</h2>
        <div className="links">
          <button
            className="btn-links"
            onClick={() => handleButtonClick(project.netlify)}
          >
            Netlify
          </button>
          <button
            className="btn-links"
            onClick={() => handleButtonClick(project.github)}
          >
            ssss
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectDisplay;
