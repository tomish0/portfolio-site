import React, { useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  DotGroup,
  Dot,
} from "pure-react-carousel";
import Project from "./Project/Project";
import projects from "../../projects/projects.json";
import "../../css/Main.css";
import "pure-react-carousel/dist/react-carousel.es.css";

function Main() {


  return (
    <div>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        totalSlides={projects.length}
        orientation={"vertical"}
        className={"carousel-provider"}
        dragEnabled={true}
      >
        <Slider className={"slider"} >
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
        <DotGroup className={"dots"} />
      </CarouselProvider>
    </div>
  );
}

export default Main;
