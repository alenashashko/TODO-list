import React from "react";

export const TaskList = (props) => {
  const {tasks, onTaskDeletion} = props;

  return (
    <ul className="tasks-list">
      {tasks.map((task) =>
        <li key={task.id} className="tasks-list__item task">
          <span>{task.date}</span>
          <span>{task.text}</span>
          <button className="task__delete" onClick={() => onTaskDeletion(task.id)}>Delete</button>
        </li>
      )}
    </ul>
  );
};
