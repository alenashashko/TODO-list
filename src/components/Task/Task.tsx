import { FC, useState, useCallback } from "react";

import { TaskEditMode } from "src/components/Task/TaskEditMode";
import { TaskViewMode } from "src/components/Task/TaskViewMode";

export interface Task {
  id: string;
  date: number;
  text: string;
}

interface TaskProps {
  task: Task;
  initialIsViewMode?: boolean;
}

export const useIsViewMode = (initialValue = true) => {
  const [isViewMode, setIsViewMode] = useState<boolean>(initialValue);

  const handleEditMode = useCallback(() => {
    setIsViewMode(false);
  }, []);

  const handleViewMode = useCallback(() => {
    setIsViewMode(true);
  }, []);

  return [isViewMode, handleViewMode, handleEditMode] as const;
};

export const Task: FC<TaskProps> = ({ task, initialIsViewMode = true }) => {
  const [isViewMode, handleViewMode, handleEditMode] = useIsViewMode(
    initialIsViewMode
  );

  return isViewMode ? (
    <TaskViewMode task={task} onEditClick={handleEditMode} />
  ) : (
    <TaskEditMode task={task} onFinish={handleViewMode} />
  );
};
