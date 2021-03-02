import './NewTaskForm.css';

import React, {useState, useCallback} from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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
    <form className="new-task-form" onSubmit={handleTaskCreation}>
      <div className="new-task-form__text-wrap">
        <TextField
          className="new-task-form__text"
          name="task"
          placeholder="Start typing your text here..."
          multiline
          rowsMax={10}
          value={taskText}
          onChange={handleTaskTextChange}
        />
      </div>
      <Button
        className="new-task-form__button"
        type="submit"
        size="small"
        variant="contained"
        color="primary"
      >
        Create task
      </Button>
    </form>
  );
};
