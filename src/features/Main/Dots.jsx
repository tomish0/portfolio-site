import React, { useEffect, useState } from "react";
import "../../css/Dots.css";

function Dots(props) {
  console.log(props.currentSlide);
  const slide = (index) => {
    props.setCurrentSlide(index);
    document
      .getElementById(`slide${index}`)
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="dots">
      {props.projects.map((project, index) => {
        return (
          <div className="dot" key={index} onClick={() => slide(index)}>
            <span
              className={props.currentSlide === index ? "active-dot" : ""}
            ></span>
          </div>
        );
      })}
    </div>
  );
}

export default Dots;
