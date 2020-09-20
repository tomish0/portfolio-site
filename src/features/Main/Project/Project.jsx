import React from 'react';
import ProjectInfo from "./ProjectInfo"
import ProjectWindow from "./ProjectWindow"

function Project(props) {
    return (
        <div>
            <ProjectInfo project={props.project}/>
            <ProjectWindow project={props.project}/>
        </div>
    );
}

export default Project;