import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";

import "../../css/HeaderLinks.css";

function HeaderLinks(props) {
  const [hover, setHover] = useState("");

  const hoverEffect = (num) => {
    setHover(num);
  };

  const cancelHoverEffect = () => {
    setHover("");
  };

  return (
    <div className="header-links-container">
      <a
        href="https://www.linkedin.com/in/tom-isherwood-a472b6126/"
        target="_blank"
        rel="noopener noreferrer"
        onMouseLeave={cancelHoverEffect}
        onMouseOver={() => hoverEffect(1)}
        // style={{ color: `${props.color}` }}
        className={hover === 1 ? "active" : null}
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        href="https://github.com/tomish0"
        target="_blank"
        rel="noopener noreferrer"
        onMouseLeave={cancelHoverEffect}
        onMouseOver={() => hoverEffect(2)}
        // style={{ color: `${props.color}` }}
        className={hover === 2 ? "active" : null}
      >
        <FontAwesomeIcon icon={faGithubSquare} />
      </a>
      <a
        href="mailto:tom.isherwood0@gmail.com"
        onMouseLeave={cancelHoverEffect}
        onMouseOver={() => hoverEffect(3)}
        // style={{ color: `${props.color}` }}
        className={hover === 3 ? "active" : null}
      >
        <FontAwesomeIcon icon={faEnvelopeSquare} />
      </a>
    </div>
  );
}

export default HeaderLinks;
