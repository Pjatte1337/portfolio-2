import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
//import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <div className="show">
        <h1> {project.name}</h1>
        <img src={project.image} alt="description"/>
      </div>
      <div className="project-info">
        <h2 className="head">Description:</h2>
        <p className="des">{project.description}</p>
      </div>
      <div className="project-tools">
        <h2 className="head">Tools used:</h2>
        <p className="des">{project.tools}</p>
      </div>
    </div>
  );
}

export default ProjectDisplay;