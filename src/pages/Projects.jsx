import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/Project.css";
import { Helmet } from "react-helmet";

function Projects() {
  return (
    <div className="projects">
      <Helmet>
        <title>Joakim | Projects</title>
        <meta name="description" content="List of my project" />
      </Helmet>
      <div className="projectList">
        {ProjectList.map((project, idx) => (
          <ProjectItem
            key={idx}
            id={idx}
            name={project.name}
            image={project.image}
            title={project.title}
            info={project.info}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
