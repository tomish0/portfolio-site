import React, { useState } from "react";
import Project from "./Project/Project";
import projects from "../../projects/projects.json";
import "../../css/Main.css";

function Main() {
  const [position, setPosition] = useState(0);
  const slide = (index) => {
    var newPosition = index * -100
    setPosition(newPosition)
  };

  return (
    <div className="carousel">
      <div className="slider">
        {projects.map((project, index) => {
          return (
            <div
              className="slide"
              key={index}
              style={{
                transform: `translateY(${position}%)`,
                backgroundColor: `${project.backgroundColor}`,
              }}
            >
              <Project project={project} />
            </div>
          );
        })}
      </div>
      <div className="dots">
        {projects.map((project, index) => {
          return (
            <div className="dot" key={index} onClick={() => slide(index)}>
              <span></span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Main;
