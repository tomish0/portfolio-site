import React from "react";

function ProjectInfo(props) {
  const { project } = props;

  return (
    <div className="project-info-container">
      <p className="project-type">{project.type}</p>
      <a href={project.link} target="_blank" className="project-title">
        <div>{project.title}</div>
      </a>
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
      <div>NOTE: {project.note}</div>
    </div>
  );
}

export default ProjectInfo;
