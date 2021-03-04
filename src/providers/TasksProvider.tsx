import {FC, createContext, useContext, useState, useCallback, useMemo} from "react";
import {nanoid} from "nanoid";
import { Task } from "components/Task/Task";

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

  const [tasks, setTasks] = useState<Task[]>([]);

  const createTask = useCallback((text: string) => {
    setTasks([...tasks, {
      id: nanoid(),
      date: Date.now(),
      text
    }])
  }, [tasks]);

  const changeTask = useCallback((taskId: string, newText: string) => {
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

  const deleteTask = useCallback((taskId: string) => {
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
