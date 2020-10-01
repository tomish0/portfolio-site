import React, { useEffect, useState } from "react";
import Color from "color";
import Project from "./Project/Project";
import Dots from "./Dots";
import projects from "../../assets/projects.json";
import "../../css/Main.css";

function Main(props) {
  const [slideDist, setSlideDist] = useState({
    slideHeight: 0,
    slideWidth: 0,
  });

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
    var slideWidth = -document.body.scrollWidth;
    setSlideDist({ slideHeight, slideWidth });
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleEvent = () => {
    var elem = document.querySelector(`#slide0`);
    var bounding = elem.getBoundingClientRect();
    var boundingTop = bounding.top + slideDist.slideHeight / 2;
    var boundingLeft = bounding.left + slideDist.slideWidth / 2;
    if (
      boundingTop > slideDist.slideHeight ||
      boundingLeft > slideDist.slideHeight
    ) {
      setCurrentSlide(0);
      props.setColor(props.colors[0]);
    }
    var slider = document.querySelector(".slider");
    var slides = slider.children.length;
    for (var i = 1; i < slides; i++) {
      if (
        (boundingTop <= slideDist.slideHeight * i &&
          boundingTop > slideDist.slideHeight * (i + 1)) ||
        (boundingLeft <= slideDist.slideWidth * i &&
          boundingLeft > slideDist.slideWidth * (i + 1))
      ) {
        setCurrentSlide(i);
        props.setColor(props.colors[i]);
      }
    }
  };

  return (
    <div className="carousel">
      <div className="slider">
        {projects.map((project, index) => {
          var color = Color(project.backgroundColor);
          var darkerColor = color.darken(0.4);
          return (
            <div
              onWheel={handleEvent}
              className="slide"
              key={index}
              id={`slide${index}`}
              style={{
                backgroundImage: `radial-gradient(${darkerColor}, ${color})`,
              }}
            >
              <Project project={project} color={props.color} />
            </div>
          );
        })}
      </div>
      <Dots
        projects={projects}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
        colors={props.colors}
        setColor={props.setColor}
        color={props.color}
      />
    </div>
  );
}

export default Main;
