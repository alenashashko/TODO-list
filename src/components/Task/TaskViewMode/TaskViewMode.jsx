import React, {useCallback} from "react";

import {useTasksInfo} from "../../../lib/providers/TasksProvider";

export const TaskViewMode = (props) => {
  const {task, onEditClick} = props;
  const {date, text, id} = task;
  const {deleteTask} = useTasksInfo();

  const handleTaskDeletion = useCallback(() => {
    deleteTask(id);
  }, [deleteTask]);

  return (
    <div className="task">
      <span>{date}</span>
      <span>{text}</span>
      <button className="task__edit" onClick={onEditClick}>Edit</button>
      <button className="task__delete" onClick={handleTaskDeletion}>Delete</button>
    </div>
  );
};
