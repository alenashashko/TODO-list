import React, {useState, useCallback} from "react";
import {nanoid} from "nanoid";

export const NewTaskForm = (props) => {
  const {onTaskCreation} = props;

  const [taskText, setTaskText] = useState("");

  const handleTaskTextChange = useCallback((evt) => {
    setTaskText(evt.target.value);
  }, []);

  const handleTaskCreation = useCallback((evt) => {
    evt.preventDefault();

    onTaskCreation({
      id: nanoid(),
      date: Date.now(),
      text: taskText
    });

    setTaskText("");
  }, [onTaskCreation, taskText]);

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
