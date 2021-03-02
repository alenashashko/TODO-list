import React from "react";

import {Task} from "../Task/Task";

export const TaskList = (props) => {
  const {tasks, onTaskDeletion, onTaskChange} = props; // create context

  return (
    <ul className="tasks-list">
      {tasks.map((task) =>
        <li key={task.id} className="tasks-list__item">
          <Task task={task} onTaskDeletion={onTaskDeletion} onTaskChange={onTaskChange} />
        </li>
      )}
    </ul>
  );
};
