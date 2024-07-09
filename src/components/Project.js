// Project.js
import React from 'react';
import TaskList from './TaskList';
import styles from './Project.module.css';

const Project = ({ project, deleteProject, updateProjectTasks }) => {
  const handleDeleteProject = () => {
    deleteProject(project.id);
  };

  return (
    <div className={styles.project}>
      <h2 className={styles.projectName}>{project.name}</h2>
      <button onClick={handleDeleteProject} className={styles.deleteButton}>Delete Project</button>
      <TaskList
        projectId={project.id}
        tasks={project.tasks}
        updateProjectTasks={updateProjectTasks}
      />
    </div>
  );
};

export default Project;
