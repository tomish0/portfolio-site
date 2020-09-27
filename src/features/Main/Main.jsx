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
    var elem = document.querySelector(`#slide4`);
    var bounding = elem.getBoundingClientRect();

    // console.log(bounding.top);
    var slideDist = (bounding.top / 4) * -1;
    setSlideDist(slideDist);
    console.log(slideDist);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const [scrolled, setScrolled] = useState(false);

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleEvent = (e) => {
    // var isInViewport = (elem) => {
    //   var bounding = elem.getBoundingClientRect();
    //   var myElementHeight = elem.offsetHeight;
    //   console.log(bounding.top);
    //   return (
    //     // distance.top >= 0 &&
    //     // distance.left >= 0 &&
    //     // distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    //     // distance.right <= (window.innerWidth || document.documentElement.clientWidth)
    //     bounding.top >= 0 &&
    //     bounding.left >= 0 &&
    //     bounding.right <=
    //       (window.innerWidth || document.documentElement.clientWidth) &&
    //     bounding.bottom <=
    //       (window.innerHeight || document.documentElement.clientHeight) +
    //         myElementHeight
    //   );
    // };
    // var slider = document.querySelector(".slider");
    // var slides = slider.children;
    // for (var i = 0; i < slides.length; i++) {
    //   if (isInViewport(slides[i])) {
    //     // console.log(i);
    //     setCurrentSlide(i);
    //   }
    // }
    var elem = document.querySelector(`#slide0`);
    var bounding = elem.getBoundingClientRect();
    var boundingTop = bounding.top - 10;
    
    console.log(boundingTop, slideDist);
    if (boundingTop > slideDist) {
      setCurrentSlide(0);
    }
    if (boundingTop <= slideDist && boundingTop > slideDist * 2) {
      setCurrentSlide(1);
    }
    if (boundingTop <= slideDist * 2 && boundingTop > slideDist * 3) {
      setCurrentSlide(2);
    }
    if (boundingTop <= slideDist * 3 && boundingTop > slideDist * 4) {
      setCurrentSlide(3);
    }
    if (boundingTop <= slideDist * 4) {
      setCurrentSlide(4);
    }
  };

  const handleEvent3 = (e) => {
    console.log(e.deltaY);
    var dir = e.deltaY;
    setScrolled(false);
    if (!scrolled) {
      var nextSlide;
      if (dir < 0) {
        nextSlide = currentSlide + 1;
      } else {
        nextSlide = currentSlide - 1;
      }
      setCurrentSlide(nextSlide);
      document
        .getElementById(`slide${nextSlide}`)
        .scrollIntoView({ behavior: "smooth" });
      setScrolled(true);
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
