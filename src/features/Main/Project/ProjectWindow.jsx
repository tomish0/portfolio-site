import React, { useState } from "react";

function ProjectWindow(props) {
  const { project } = props;

  const [hover, setHover] = useState(false);

  const hoverEffect = () => {
    setHover(true);
  };

  const cancelHoverEffect = () => {
    setHover(false);
  };

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="window-link"
      onMouseLeave={cancelHoverEffect}
      onMouseOver={hoverEffect}
      style={
        hover
          ? {
              boxShadow: `0px 0px 50px 0px ${props.color}`,
            }
          : { boxShadow: `0px 0px 30px 0px ${props.color}` }
      }
    >
      <img src={`${project.image}`} alt="project-window" />
    </a>
  );
}

export default ProjectWindow;
