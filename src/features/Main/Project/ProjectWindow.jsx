import React from "react";

function ProjectWindow(props) {
  const { project } = props;

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="window-link"
      style={{ 
        boxShadow: `0px 0px 30px 0px ${props.color}` }}
    >
      <img src={`${project.image}`} alt="project-window" />
    </a>
  );
}

export default ProjectWindow;
