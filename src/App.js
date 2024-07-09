// App.js
import React, { useState } from 'react';
import ProjectList from './components/ProjectList';
import styles from './App.module.css';

const App = () => {
  const [projects, setProjects] = useState([]);

  const addProject = (name) => {
    const newProject = { id: Date.now(), name, tasks: [] };
    setProjects([...projects, newProject]);
  };

  const deleteProject = (projectId) => {
    setProjects(projects.filter(project => project.id !== projectId));
  };

  const updateProjectTasks = (projectId, tasks) => {
    setProjects(
      projects.map(project => 
        project.id === projectId ? { ...project, tasks } : project
      )
    );
  };

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Project Management Tool</h1>
      <ProjectList
        projects={projects}
        addProject={addProject}
        deleteProject={deleteProject}
        updateProjectTasks={updateProjectTasks}
      />
    </div>
  );
};

export default App;
