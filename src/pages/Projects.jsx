import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";

import "../styles/Project.css";

function Projects() {
    return (
        <div className="projects">
            <div className="projectList">
                {ProjectList.map((project, idx) => {
                    return ( 
                    <ProjectItem id={idx} name={project.name} image={project.image} title={project.title} info={project.info}  />
                    );
                })}
            </div>
        </div>
    );
}

export default Projects;