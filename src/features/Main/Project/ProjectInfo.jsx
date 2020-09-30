import React, { useState } from "react";
import pdf from "../../../assets/RBuddie-Qr-Codes-26-09-20.pdf";

function ProjectInfo(props) {
  const { project } = props;

  const [hover, setHover] = useState("");

  const hoverEffect = (num) => {
    setHover(num);
  };

  const cancelHoverEffect = () => {
    setHover("");
  };

  return (
    <div className="project-info-container">
      <p className="project-type">{project.type}</p>
      <div
        onMouseLeave={cancelHoverEffect}
        onMouseOver={() => hoverEffect(1)}
        className="project-title"
      >
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-title-link"
          style={{ color: `${props.color}` }}
        >
          {project.title}
        </a>
        <div
          className={hover === 1 ? "active link-underline" : "link-underline"}
          style={{ backgroundColor: `${props.color}` }}
        ></div>
      </div>
      <div className="project-description">{project.description}</div>
      <table className="project-tech-table">
        <tbody>
          <tr>
            {project.tech.backEnd.length > 0 ? <th>Front </th> : null}
            {project.tech.frontEnd.map((item, index) => (
              <td key={index} className="project-tech-item">
                {item}
              </td>
            ))}
          </tr>
          {project.tech.backEnd.length > 0 ? (
            <tr>
              <th>Back </th>
              {project.tech.backEnd.map((item, index) => (
                <td key={index} className="project-tech-item">
                  {item}
                </td>
              ))}
            </tr>
          ) : null}
        </tbody>
      </table>
      {project.note ? <div>NOTE: {project.note}</div> : null}
      {project.title === "RBuddie LTD - Receipt Storage App" ? (
        <div className="pdf-download-container">
          <a
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="pdf-download"
            style={{ color: `${props.color}` }}
            onMouseLeave={cancelHoverEffect}
            onMouseOver={() => hoverEffect(2)}
          >
            PDF
            <div
            className={hover === 2 ? "active link-underline" : "link-underline"}
            style={{ backgroundColor: `${props.color}` }}
          ></div>
          </a>
          
          <div>- Dummy receipt QR codes to scan through the application.</div>
        </div>
      ) : null}
    </div>
  );
}

export default ProjectInfo;
