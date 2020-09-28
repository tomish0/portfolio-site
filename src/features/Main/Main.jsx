import React, { useEffect, useState } from "react";
import Color from "color";
import Project from "./Project/Project";
import Dots from "./Dots";
import projects from "../../assets/projects.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "../../css/Main.css";

function Main() {
  const [slideDist, setSlideDist] = useState(0);

  useEffect(() => {
    getSlideDist();
    window.onresize = () => {
      getSlideDist();
    };
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const getSlideDist = () => {
    var slideHeight = -document.body.scrollHeight;
    setSlideDist(slideHeight);
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleEvent = () => {
    var elem = document.querySelector(`#slide0`);
    var bounding = elem.getBoundingClientRect();
    var boundingTop = bounding.top + slideDist / 2;
    if (boundingTop > slideDist) {
      setCurrentSlide(0);
    }
    var slider = document.querySelector(".slider");
    var slides = slider.children.length;
    for (var i = 1; i < slides; i++) {
      if (boundingTop <= slideDist * i && boundingTop > slideDist * (i + 1)) {
        setCurrentSlide(i);
      }
    }
  };

  return (
    <div className="carousel">
      <div className="slider">
        {projects.map((project, index) => {
          var color = Color(project.backgroundColor);
          var darkerColor = color.darken(0.5);
          return (
            <div
              onWheel={handleEvent}
              className="slide"
              key={index}
              id={`slide${index}`}
              style={{
                backgroundImage: `linear-gradient(to top left, ${color} 30%, ${darkerColor})`,
              }}
            >
              <Project project={project} />
            </div>
          );
        })}
      </div>
      <Dots
        projects={projects}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      />
    </div>
  );
}

export default Main;
