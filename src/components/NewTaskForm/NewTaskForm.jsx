import React, {useState, useCallback} from "react";

import {useTasksInfo} from "../../lib/providers/TasksProvider";

export const NewTaskForm = () => {
  const {createTask} = useTasksInfo();

  const [taskText, setTaskText] = useState("");

  const handleTaskTextChange = useCallback((evt) => {
    setTaskText(evt.target.value);
  }, []);

  const handleTaskCreation = useCallback((evt) => {
    evt.preventDefault();

    createTask(taskText);

    setTaskText("");
  }, [createTask, taskText]);

  return (
    <form className="new-task" onSubmit={handleTaskCreation}>
      <textarea
        className="new-task__text"
        name="task"
        placeholder="Start typing your text here..."
        value={taskText}
        onChange={handleTaskTextChange}
      />
      <button className="new-task__button" type="submit">Create task</button>
    </form>
  );
};
