import React, {useState, useCallback} from "react";

import {TaskViewMode} from "./TaskViewMode/TaskViewMode";
import {TaskEditMode} from "./TaskEditMode/TaskEditMode";

export const Task = (props) => {
  const {task, onTaskDeletion, onTaskChange} = props;

  const [mode, setMode] = useState("view");

  const handleModeChange = useCallback((mode) => {
    setMode(mode);
  }, []);

  return mode === "view"
    ? <TaskViewMode task={task} onTaskDeletion={onTaskDeletion} onModeChange={handleModeChange} />
    : <TaskEditMode task={task} onModeChange={handleModeChange} onTaskChange={onTaskChange} />
};
