import { FC, createContext, useContext, useCallback, useMemo } from "react";
import { useLocalStorage, writeStorage } from "@rehooks/local-storage";
import { nanoid } from "nanoid";

import { Task } from "components/Task/Task";

export const TasksContext = createContext(
  {} as {
    tasks: Task[];
    createTask: (text: string) => void;
    changeTask: (taskId: string, newText: string) => void;
    deleteTask: (taskId: string) => void;
  }
);

export const useTasksInfo = () => {
  const value = useContext(TasksContext);

  if (value.tasks === undefined) {
    throw new Error("you should use useTasksInfo inside of TasksProvider");
  }

  return value;
};

const TASKS_STORAGE_KEY = "tasks";

export const useLocalStorageTasks = () => {
  const [tasks] = useLocalStorage<Task[]>(TASKS_STORAGE_KEY, []);

  const setTasks = useCallback((newTasks: Task[]) => {
    writeStorage(TASKS_STORAGE_KEY, newTasks);
  }, []);

  return [tasks, setTasks] as const;
};

export const useTasks = () => {
  const [tasks, setTasks] = useLocalStorageTasks();

  const createTask = useCallback(
    (text: string) => {
      setTasks([
        ...tasks,
        {
          id: nanoid(),
          date: Date.now(),
          text,
        },
      ]);
    },
    [tasks]
  );

  const changeTask = useCallback(
    (taskId: string, newText: string) => {
      setTasks(
        tasks.map((task) => {
          return task.id !== taskId
            ? task
            : {
                ...task,
                date: Date.now(),
                text: newText,
              };
        })
      );
    },
    [tasks]
  );

  const deleteTask = useCallback(
    (taskId: string) => {
      setTasks(tasks.filter((task) => task.id !== taskId));
    },
    [tasks]
  );

  return [tasks, createTask, changeTask, deleteTask] as const;
};

export const TasksProvider: FC = ({ children }) => {
  const [tasks, createTask, changeTask, deleteTask] = useTasks();

  const value = useMemo(
    () => ({
      tasks,
      createTask,
      changeTask,
      deleteTask,
    }),
    [tasks, createTask, changeTask, deleteTask]
  );

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};
