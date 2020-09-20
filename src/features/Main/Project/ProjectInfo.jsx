import React from "react";

function ProjectInfo(props) {
  const { project } = props;
  return (
    <div>
      ProjectInfo
      <div>{project.type}</div>
      <div>{project.title}</div>
      <div>{project.description}</div>
      <div>{project.tech}</div>
      <div>{project.github}</div>
      <div>{project.note}</div>
    </div>
  );
}

export default ProjectInfo;
