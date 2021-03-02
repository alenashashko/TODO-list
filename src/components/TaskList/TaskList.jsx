import React from "react";

import {useTasksInfo} from "../../lib/providers/TasksProvider";
import {Task} from "../Task/Task";

export const TaskList = () => {
  const {tasks} = useTasksInfo();

  return (
    <ul className="tasks-list">
      {tasks.map((task) =>
        <li key={task.id} className="tasks-list__item">
          <Task task={task} />
        </li>
      )}
    </ul>
  );
};
