import React from "react";
import Project from "./Project/Project"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Main() {
  return (
    <Carousel>
      <div>
        <Project />
      </div>
      <div>
        <Project />
      </div>
      <div>
        <Project />
      </div>
    </Carousel>
  );
}

export default Main;
