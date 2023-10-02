import React from "react";

function ProjectItem({ name, about, technologies }) {
  let id=0;
  const techList = technologies.map(tech => {
    ++id;
    return <span key={name+id}>{tech}</span>
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {techList}
      </div>
    </div>
  );
}

export default ProjectItem;
