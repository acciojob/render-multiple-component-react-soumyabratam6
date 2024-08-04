import React, {Component, useState} from "react";
import '../styles/App.css';
function App() {
  // Array of dream projects
  const projects = [
    {
      name: "Project A",
      description: "A project about creating a revolutionary app.",
    },
    {
      name: "Project B",
      description: "B project focuses on developing an AI assistant.",
    },
    {
      name: "Project C",
      description: "C project is about designing a sustainable product.",
    },
  ];

  return (
    <div className="ns-wrapper">
      {projects.map((project, index) => (
        <div key={index}>
          <h1 data-ns-test="project-name">{project.name}</h1>
          <h6 data-ns-test="project-description">{project.description}</h6>
        </div>
      ))}
    </div>
  );
}

export default App;
