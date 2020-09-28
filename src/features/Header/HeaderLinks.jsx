import React from "react";
// import cv from "../../assets/Web_Development_CV.pdf";
import "../../css/HeaderLinks.css";

function HeaderLinks() {
  return (
    <div className="header-links-container">
      {/* <a href={cv} target="_blank" rel="noopener noreferrer">
        CV
      </a> */}
      <a
        href="https://www.linkedin.com/in/tom-isherwood-a472b6126/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Linkedin
      </a>
      <a
        href="https://github.com/tomish0"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
      {/* <div>tom.isherwood0@gmail.com</div> */}
      <a href="mailto:tom.isherwood0@gmail.com">tom.isherwood0@gmail.com</a>
      {/* <div>+44 7766 311452</div> */}
    </div>
  );
}

export default HeaderLinks;
