import React, { useEffect, useState } from "react";
import Color from "color";
import Project from "./Project/Project";
import Dots from "./Dots";
import projects from "../../projects/projects.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "../../css/Main.css";

function Main() {
  const [pageHeight, setPageHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.onresize = function () {
      setPageHeight(window.innerHeight);
    };
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const [scrolled, setScrolled] = useState(false);

  const handleEvent = (e) => {
    // console.log(e.type, e, e.pageY, e.screenY);
    var dir = e.deltaY;
    setScrolled(false);

    // if (dir < -5 && dir > -20) {
    //   setLastmovement("up");
    // } else if (dir > 5 && dir < 20) {
    //   setLastmovement("down");
    // } else {
    //   setLastmovement(null);
    // }

    var lastScrollY = window.pageYOffset;
    var height;
    if (!scrolled) {
      if (dir < -10) {
        // console.log("up");

        if (lastScrollY >= 0 && lastScrollY < pageHeight) {
          height = 0;
        }
        if (lastScrollY >= pageHeight && lastScrollY < pageHeight * 2) {
          height = pageHeight;
        }
        if (lastScrollY >= pageHeight * 2 && lastScrollY < pageHeight * 3) {
          height = pageHeight * 2;
        }
        if (lastScrollY >= pageHeight * 3 && lastScrollY < pageHeight * 4) {
          height = pageHeight * 3;
        }
        if (lastScrollY >= pageHeight * 4 && lastScrollY < pageHeight * 5) {
          height = pageHeight * 4;
        }
        window.scrollTo({
          top: height,
          left: 0,
          behavior: "smooth",
        });
      } else if (dir > 10) {
        // console.log("down");

        if (lastScrollY >= 0 && lastScrollY < pageHeight) {
          height = pageHeight;
        }
        if (lastScrollY >= pageHeight && lastScrollY < pageHeight * 2) {
          height = pageHeight * 2;
        }
        if (lastScrollY >= pageHeight * 2 && lastScrollY < pageHeight * 3) {
          height = pageHeight * 3;
        }
        if (lastScrollY >= pageHeight * 3 && lastScrollY < pageHeight * 4) {
          height = pageHeight * 4;
        }
        if (lastScrollY >= pageHeight * 4 && lastScrollY < pageHeight * 5) {
          height = pageHeight * 5;
        }
        window.scrollTo({
          top: height,
          left: 0,
          behavior: "smooth",
        });
      }
      setScrolled(true);
    }
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleEvent2 = (dir) => {
    console.log(dir);
    var nextSlide;
    if (dir === 1) {
      nextSlide = currentSlide + 1;
    } else {
      nextSlide = currentSlide - 1;
    }
    setCurrentSlide(nextSlide);
    document
      .getElementById(`slide${nextSlide}`)
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="carousel">
      <div className="slider">
        {projects.map((project, index) => {
          var color = Color(project.backgroundColor);
          var darkerColor = color.darken(0.5)

          return (
            <div
              className="slide"
              key={index}
              id={`slide${index}`}
              style={{
                backgroundImage: `linear-gradient(to top left, ${color} 30%, ${darkerColor})`,
              }}
            >
              {currentSlide !== 0 ? (
                <FontAwesomeIcon
                  icon={faChevronUp}
                  onClick={() => handleEvent2(-1)}
                  className="prev-btn"
                />
              ) : null}
              <Project project={project} />
              {currentSlide !== 4 ? (
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="next-btn"
                  onClick={() => handleEvent2(1)}
                />
              ) : null}
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
