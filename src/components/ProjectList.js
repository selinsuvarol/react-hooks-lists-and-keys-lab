import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projects.map(project => (
          <ProjectItem key={project.name} {...project} />
        ))}
        </div>
    </div>
  );
}

export default ProjectList;
