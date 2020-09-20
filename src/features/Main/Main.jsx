import React, { useState } from "react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import Project from "./Project/Project";
import projects from "../../projects/projects.json";
import "../../css/Main.css";
import "pure-react-carousel/dist/react-carousel.es.css";

function Main() {
  return (
    <div>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={projects.length}
        orientation={'vertical'}
      >
        <Slider>
          {projects.map((project, index) => {
            return (
              <Slide
                className="each-project"
                index={index}
                key={index}
                style={{ backgroundColor: `${project.backgroundColor}` }}
              >
                <Project project={project} />
              </Slide>
            );
          })}
        </Slider>
      </CarouselProvider>
    </div>
  );
}

export default Main;
