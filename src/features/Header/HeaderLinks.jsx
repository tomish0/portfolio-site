import React from "react";
import "../../css/HeaderLinks.css";

function HeaderLinks(props) {
  return (
    <div className="header-links-container">
      <a href="#">CV</a>
      <a
        href="https://www.linkedin.com/in/tom-isherwood-a472b6126/"
        target="_blank"
      >
        Linkedin
      </a>
      <a href="https://github.com/tomish0" target="_blank">
        Github
      </a>
      <div>tom.isherwood0@gmail.com</div>
      <div>+44 7766 311452</div>
    </div>
  );
}

export default HeaderLinks;
