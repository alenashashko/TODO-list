import {FC, useState, useCallback} from "react";

import {TaskViewMode} from "./TaskViewMode/TaskViewMode";
import {TaskEditMode} from "./TaskEditMode/TaskEditMode";

export interface Task {
  id: string;
  date: string;
  text: string;
}

interface TaskProps {
  task: Task;
}

export const Task: FC<TaskProps> = (props) => {
  const {task} = props;

  const [isViewMode, setIsViewMode] = useState<boolean>(true);

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
