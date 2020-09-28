import React from "react";
import ProjectInfo from "./ProjectInfo";
import ProjectWindow from "./ProjectWindow";
import "../../../css/Project.css"

function Project(props) {
  return (
    <div className='project-container'>
      <ProjectInfo project={props.project} />
      <ProjectWindow project={props.project} color={props.color}/>
    </div>
  );
}

export default Project;
