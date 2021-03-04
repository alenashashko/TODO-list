import {FC, useState, useCallback} from "react";

import TaskViewMode from "./TaskViewMode/TaskViewMode";
import TaskEditMode from "./TaskEditMode/TaskEditMode";

export interface TaskInterface { // ?
  id: number;
  date: number;
  text: string;
}

interface TaskProps {
  task: TaskInterface;
}

export const Task: FC<TaskProps> = (props) => {
  const {task} = props;

  const [isViewMode, setIsViewMode] = useState(true); // как отметить тип boolean ?

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
