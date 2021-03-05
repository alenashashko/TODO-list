import {FC, createContext, useContext, useCallback, useMemo} from "react";
import {useLocalStorage, writeStorage} from '@rehooks/local-storage';
import {nanoid} from "nanoid";

import {Task} from "components/Task/Task";

const TASKS_STORAGE_KEY = "tasks";

const TasksContext = createContext<{
  tasks: Task[];
  createTask: (text: string) => void;
  changeTask: (taskId: string, newText: string) => void;
  deleteTask: (taskId: string) => void;
}>({
  tasks: [],
  createTask: () => {},
  changeTask: () => {},
  deleteTask: () => {},
});

export const useTasksInfo = () => {
  const value = useContext(TasksContext);

  if (value === undefined) {
    throw new Error("you should use useTasksInfo inside of TasksProvider");
  }

  return value;
};

export const TasksProvider: FC = (props) => {
  const {children} = props;

  const [tasks] = useLocalStorage<Task[]>(TASKS_STORAGE_KEY, []);

  const createTask = useCallback((text: string) => {
    writeStorage(TASKS_STORAGE_KEY, [...tasks, {
      id: nanoid(),
      date: Date.now(),
      text
    }])
  }, [tasks]);

  const changeTask = useCallback((taskId: string, newText: string) => {
    writeStorage(TASKS_STORAGE_KEY, tasks.map((task) => {
      return task.id !== taskId
        ? task
        : {
          ...task,
          date: Date.now(),
          text: newText
        }
    }))
  }, [tasks]);

  const deleteTask = useCallback((taskId: string) => {
    writeStorage(TASKS_STORAGE_KEY, tasks.filter((task) => task.id !== taskId));
  }, [tasks]);

  const value = useMemo(() => ({
    tasks,
    createTask,
    changeTask,
    deleteTask
  }), [tasks, createTask, changeTask, deleteTask]);

  return <TasksContext.Provider value={value}>{children}</TasksContext.Provider>;
};
