import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectItem( { image, name, id, title,info }) {
    const navigate = useNavigate()
    return (
        <div 
            className="projectItem"
            onClick={() => {
                navigate("/project/" + id);
                }
            }>
            <div style={{backgroundImage: `url(${image})`}} className="bgImage"/>
            <h1> {name} </h1>
            <p> {title} </p>
            <p> {info} </p>
            <p className="more"> Click for more </p>
        </div>
    );
}

export default ProjectItem;