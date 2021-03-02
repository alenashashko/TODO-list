import React, {useState, useCallback, Fragment} from "react";

import {NewTaskForm} from "./components/NewTaskForm/NewTaskForm";
import {TaskList} from "./components/TaskList/TaskList";

export const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleTaskCreation = useCallback((newTask) => {
    setTasks([...tasks, newTask])
  }, [tasks]);

  const handleTaskDeletion = useCallback((taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }, [tasks]);

  return (
    <Fragment>
      <NewTaskForm onTaskCreation={handleTaskCreation} />

      <TaskList tasks={tasks} onTaskDeletion={handleTaskDeletion} />
    </Fragment>
  );
};
