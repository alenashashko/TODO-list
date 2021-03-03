import React, {useState, useCallback} from "react";

import TaskViewMode from "./TaskViewMode/TaskViewMode";
import TaskEditMode from "./TaskEditMode/TaskEditMode";

export const Task = (props) => {
  const {task} = props;

  const [isViewMode, setIsViewMode] = useState(true);

  const handleEditMode = useCallback(() => {
    setIsViewMode(false);
  }, []);

  const handleViewMode = useCallback(() => {
    setIsViewMode(true);
  }, []);

  return isViewMode
    ? <TaskViewMode task={task} onEditClick={handleEditMode} />
    : <TaskEditMode task={task} onFinish={handleViewMode} />
};
