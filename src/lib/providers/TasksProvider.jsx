import React, {useContext, useState, useCallback, useMemo} from "react";
import {nanoid} from "nanoid";

const TasksContext = React.createContext({
  tasks: []
});

export const useTasksInfo = () => {
  const value = useContext(TasksContext);

  if (value === undefined) {
    throw new Error("you should use useTasksInfo inside of TasksProvider");
  }

  return value;
};

export const TasksProvider = (props) => {
  const {children} = props;

  const [tasks, setTasks] = useState([]);

  const createTask = useCallback((text) => {
    setTasks([...tasks, {
      id: nanoid(),
      date: Date.now(),
      text
    }])
  }, [tasks]);

  const changeTask = useCallback((taskId, newText) => {
    setTasks(tasks.map((task) => {
      return task.id !== taskId
        ? task
        : {
          ...task,
          date: Date.now(),
          text: newText
        }
    }))
  }, [tasks]);

  const deleteTask = useCallback((taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }, [tasks]);

  const value = useMemo(() => ({
    tasks,
    createTask,
    changeTask,
    deleteTask
  }), [tasks, createTask, changeTask, deleteTask]);

  return <TasksContext.Provider value={value}>{children}</TasksContext.Provider>;
};
