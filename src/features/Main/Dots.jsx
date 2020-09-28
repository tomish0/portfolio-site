import React, { useEffect, useState } from "react";
import "../../css/Dots.css";

function Dots(props) {
  const slide = (index) => {
    props.setCurrentSlide(index)
    document
      .getElementById(`slide${index}`)
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="dots">
      {props.projects.map((project, index) => {
        return (
          <div
            key={index}
            onClick={() => slide(index)}
            className={props.currentSlide === index ? "dot active-dot" : "dot"}
          >
            <span></span>
          </div>
        );
      })}
    </div>
  );
}

export default Dots;
