import React from "react";

function ProjectWindow(props) {
  const { project } = props;
  return (
    <div>
      Project Window
      <div>{project.image}</div>
    </div>
  );
}

export default ProjectWindow;
