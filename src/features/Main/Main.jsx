import React, { useEffect, useState } from "react";
import Color from "color";
import Project from "./Project/Project";
import Dots from "./Dots";
import projects from "../../assets/projects.json";
import "../../css/Main.css";

function Main() {
  const [slideDist, setSlideDist] = useState({
    slideHeight: 0,
    slideWidth: 0,
  });

  useEffect(() => {
    getSlideDist();
    getColors();
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

  const [colors, setColors] = useState([]);

  const [color, setColor] = useState(undefined);

  const getColors = () => {
    projects.forEach((project) => {
      var color = Color(project.backgroundColor);
      var light = color.isLight();
      var newColor;
      if (light) {
        newColor = color.rotate(50).darken(0.5);
      } else {
        newColor = color.rotate(-50).lighten(0.8);
      }
      setColors((colors) => [...colors, newColor]);
    });
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleEvent = () => {
    var elem = document.querySelector(`#slide0`);
    var bounding = elem.getBoundingClientRect();
    var boundingTop = bounding.top + slideDist.slideHeight / 2;
    // var boundingLeft = bounding.left + slideDist.slideWidth / 2;
    if (
      boundingTop > slideDist.slideHeight 
      // ||
      // boundingLeft > slideDist.slideHeight
    ) {
      setCurrentSlide(0);
      setColor(colors[0]);
    }
    var slider = document.querySelector(".slider");
    var slides = slider.children.length;
    for (var i = 1; i < slides; i++) {
      if (
        (boundingTop <= slideDist.slideHeight * i &&
          boundingTop > slideDist.slideHeight * (i + 1)) 
        //   ||
        // (boundingLeft <= slideDist.slideWidth * i &&
        //   boundingLeft > slideDist.slideWidth * (i + 1))
      ) {
        setCurrentSlide(i);
        setColor(colors[i]);
      }
    }
  };

  return (
    <div className="carousel" onWheel={handleEvent} onTouchMove={handleEvent}>
      <div className="slider">
        {projects.map((project, index) => {
          var color = Color(project.backgroundColor);
          var darkerColor = color.darken(0.4);
          return (
            <div
              className="slide"
              key={index}
              id={`slide${index}`}
              style={{
                backgroundImage: `radial-gradient(${darkerColor}, ${color})`,
              }}
            >
              <Project project={project} color={colors[index]} />
            </div>
          );
        })}
        <Dots
          projects={projects}
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
          colors={colors}
          setColor={setColor}
          color={color ? color : colors[0]}
        />
      </div>
    </div>
  );
}

export default Main;
