import React from "react";
import { useState } from "react";
import "../../css/Dots.css";

function Dots(props) {
  const slide = (index) => {
    props.setCurrentSlide(index);
    document
      .getElementById(`slide${index}`)
      .scrollIntoView({ behavior: "smooth" });
    props.setColor(props.colors[index]);
  };

  const [hover, setHover] = useState("");

  const hoverEffect = (index) => {
    setHover(index);
  };

  const cancelHoverEffect = () => {
    setHover("");
  };

  return (
    <div className="dots">
      {props.projects.map((project, index) => {
        return (
          <div
            key={index}
            onClick={() => slide(index)}
            onMouseLeave={cancelHoverEffect}
            onMouseOver={() => hoverEffect(index)}
            className="dot"
            style={
              props.currentSlide === index || hover === index
                ? { borderColor: `${props.color}` }
                : null
            }
          >
            <span style={{ backgroundColor: `${props.color}` }}></span>
          </div>
        );
      })}
    </div>
  );
}

export default Dots;
