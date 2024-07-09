// Task.js
import React from 'react';
import styles from './Task.module.css';  // Importing the CSS module

const Task = ({ task, deleteTask, toggleTaskCompletion }) => {
  const handleDeleteTask = () => {
    deleteTask(task.id);
  };

  const handleToggleCompletion = () => {
    toggleTaskCompletion(task.id);
  };

  return (
    <div className={styles.task}>
      <span
        className={`${styles.taskName} ${task.completed ? styles.completed : ''}`}
        onClick={handleToggleCompletion}
      >
        {task.name}
      </span>
      <button onClick={handleDeleteTask} className={styles.deleteButton}>Delete</button>
    </div>
  );
};

export default Task;
