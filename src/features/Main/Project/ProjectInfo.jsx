import React from "react";

function ProjectInfo(props) {
  const { project } = props;

  return (
    <div>
      ProjectInfo
      <div>{project.type}</div>
      <div>{project.link}</div>
      <div>{project.title}</div>
      <div>{project.description}</div>
      <div>{project.tech.backEnd.map((item, index) => {
          return (<div key={index}>{item}</div>)
      })}</div>
      <div>{project.tech.frontEnd.map((item, index) => {
          return (<div key={index}>{item}</div>)
      })}</div>
      <div>{project.github.backEnd}</div>
      <div>{project.github.frontEnd}</div>
      <div>{project.note}</div>
    </div>
  );
}

export default ProjectInfo;
