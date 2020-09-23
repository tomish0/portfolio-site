import React from "react";

function ProjectWindow(props) {
  const { project } = props;

  return (
    <a href={project.link} target="_blank" className="window-link">
      <img src={`${project.image}`} />
    </a>
  );
}

export default ProjectWindow;
