import React from 'react';
import Task from './Task';
import TaskForm from './TaskForm';
import styles from './TaskList.module.css';

const TaskList = ({ projectId, tasks, updateProjectTasks }) => {
  const addTask = (taskName) => {
    const newTask = { id: Date.now(), name: taskName, completed: false };
    updateProjectTasks(projectId, [...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    updateProjectTasks(projectId, tasks.filter(task => task.id !== taskId));
  };

  const toggleTaskCompletion = (taskId) => {
    updateProjectTasks(
      projectId,
      tasks.map(task => 
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className={styles.taskList}>
      <TaskForm addTask={addTask} />
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTaskCompletion={toggleTaskCompletion}
        />
      ))}
    </div>
  );
};

export default TaskList;
