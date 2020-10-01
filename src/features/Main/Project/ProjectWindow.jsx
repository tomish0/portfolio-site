import React, { useState } from "react";

function ProjectWindow(props) {
  const { project, color } = props;

  const [hover, setHover] = useState(false);

  const hoverEffect = () => {
    setHover(true);
  };

  const cancelHoverEffect = () => {
    setHover(false);
  };

  return (
    <div
      className="window-link-container"
      onMouseLeave={cancelHoverEffect}
      onMouseOver={hoverEffect}
      style={
        hover
          ? {
              boxShadow: `0px 0px 60px 0px ${color}`,
            }
          : {
              boxShadow: `0px 0px 30px 0px ${color}`,
            }
      }
    >
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <img src={`${project.image}`} alt="project-window" />
      </a>
    </div>
  );
}

export default ProjectWindow;
