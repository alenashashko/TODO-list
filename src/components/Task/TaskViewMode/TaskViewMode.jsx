import React, {useCallback} from "react";

export const TaskViewMode = (props) => {
  const {task, onTaskDeletion, onModeChange} = props;
  const {date, text, id} = task;

  const handleSetEditMode = useCallback(() => {
    onModeChange("edit");
  }, [onModeChange]);

  const handleTaskDeletion = useCallback(() => {
    onTaskDeletion(id);
  }, [onTaskDeletion]);

  return (
    <div className="task">
      <span>{date}</span>
      <span>{text}</span>
      <button className="task__edit" onClick={handleSetEditMode}>Edit</button>
      <button className="task__delete" onClick={handleTaskDeletion}>Delete</button>
    </div>
  );
};
