import React, {useState, useCallback} from "react";

import {TaskViewMode} from "./TaskViewMode/TaskViewMode";
import {TaskEditMode} from "./TaskEditMode/TaskEditMode";

export const Task = (props) => {
  const {task} = props;

  const [mode, setMode] = useState("view");

  const handleEditMode = useCallback(() => {
    setMode("edit");
  }, []);

  const handleViewMode = useCallback(() => {
    setMode("view");
  }, []);

  return mode === "view"
    ? <TaskViewMode task={task} onEditClick={handleEditMode} />
    : <TaskEditMode task={task} onFinish={handleViewMode} />
};
