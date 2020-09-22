import React, { useEffect, useState } from "react";
import Project from "./Project/Project";
import Dots from './Dots';
import projects from "../../projects/projects.json";
import "../../css/Main.css";

function Main() {
  const [pageHeight, setPageHeight] = useState(window.innerHeight);



  useEffect(() => {
    window.onresize = function () {
      setPageHeight(window.innerHeight);
      console.log(pageHeight);
    };
    console.log()
  }, []);

  const [lastMovement, setLastmovement] = useState(null);

  const handleEvent = (e) => {
    // console.log(e.type, e, e.pageY, e.screenY);

    var dir = e.deltaY;

    console.log(dir);

    if (dir < -5 && dir > -20) {
      setLastmovement("up");
    } else if (dir > 5 && dir < 20) {
      setLastmovement("down");
    } else {
      setLastmovement(null);
    }

    var lastScrollY = window.pageYOffset;
    var height;

    if (lastMovement === "up") {
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
    } else if (lastMovement === "down") {
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
  };


  return (
    <div className="carousel">
      <div className="slider">
        {projects.map((project, index) => {
          return (
            <div
              onWheel={handleEvent}
              className="slide"
              key={index}
              id={`slide${index}`}
              style={{
                // transform: `translateY(${position}%)`,
                backgroundColor: `${project.backgroundColor}`,
              }}
            >
              <Project project={project} />
            </div>
          );
        })}
      </div>
      <Dots projects={projects} pageHeight={pageHeight}/>
    </div>
  );
}

export default Main;
