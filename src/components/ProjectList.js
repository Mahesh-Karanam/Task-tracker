// ProjectList.js
import React, { useState } from 'react';
import Project from './Project';
import styles from './ProjectList.module.css';

const ProjectList = ({ projects, addProject, deleteProject, updateProjectTasks }) => {
  const [newProjectName, setNewProjectName] = useState('');

  const handleAddProject = (e) => {
    e.preventDefault();
    if (newProjectName.trim()) {
      addProject(newProjectName);
      setNewProjectName('');
    }
  };

  return (
    <div className={styles.projectList}>
      <form onSubmit={handleAddProject} className={styles.form}>
        <input
          type="text"
          value={newProjectName}
          onChange={(e) => setNewProjectName(e.target.value)}
          placeholder="New Project Name"
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Add Project</button>
      </form>
      {projects.map(project => (
        <Project
          key={project.id}
          project={project}
          deleteProject={deleteProject}
          updateProjectTasks={updateProjectTasks}
        />
      ))}
    </div>
  );
};

export default ProjectList;
