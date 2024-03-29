import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithubSquare} from '@fortawesome/free-brands-svg-icons';
import {faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons';

import '../../css/HeaderLinks.css';

function HeaderLinks() {
  return (
    <div className="header-links-container">
      <a
        href="https://www.linkedin.com/in/tom-isherwood-a472b6126/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        href="https://github.com/tomish0"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithubSquare} />
      </a>
      <a
        href="mailto:tom.isherwood0@gmail.com"
      >
        <FontAwesomeIcon icon={faEnvelopeSquare} />
      </a>
    </div>
  );
}

export default HeaderLinks;
