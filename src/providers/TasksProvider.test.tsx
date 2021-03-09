import { cleanup } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-dom/test-utils";
import {
  TasksContext,
  useLocalStorageTasks,
  useTasks,
  useTasksInfo,
} from "src/providers/TasksProvider";
import { tasksContextValueMock, tasksMock } from "src/tests/mocks/tasks";
import { FC } from "react";

afterEach(() => {
  cleanup();

  localStorage.clear();
});

describe("useLocalStorageTasks hook", () => {
  it("should be empty by default", () => {
    const { result } = renderHook(() => useLocalStorageTasks());

    const getCurrentTasksLength = () => result.current[0].length;

    expect(getCurrentTasksLength()).toBe(0);
  });

  it("should set tasks correctly", () => {
    const { result } = renderHook(() => useLocalStorageTasks());

    const getCurrentTasksLength = () => result.current[0].length;

    expect(getCurrentTasksLength()).toBe(0);

    act(() => {
      const setTasks = result.current[1];

      setTasks(tasksMock);
    });

    expect(getCurrentTasksLength()).toBe(2);
  });
});

describe("useTasks hook", () => {
  it("should create task correctly", () => {
    const { result } = renderHook(() => useTasks());

    const testText = "cool task";

    act(() => {
      const createTask = result.current[1];

      createTask(testText);
    });

    const tasks = result.current[0];

    expect(tasks.length).toBe(1);
    expect(tasks[0].text).toBe(testText);
  });

  it("should change task text correctly", () => {
    const { result } = renderHook(() => useTasks());

    const testInitialText = "cool task";
    const testChangedText = "the coolest task";

    act(() => {
      const createTask = result.current[1];

      createTask(testInitialText);
    });

    act(() => {
      const tasks = result.current[0];
      const newTaskId = tasks[0].id;

      const changeTask = result.current[2];

      changeTask(newTaskId, testChangedText);
    });

    const tasks = result.current[0];

    expect(tasks.length).toBe(1);
    expect(tasks[0].text).toBe(testChangedText);
  });

  it("should not change anything if taskId doesn't exist", () => {
    const { result } = renderHook(() => useTasks());

    const testInitialText = "cool task";
    const testChangedText = "the coolest task";

    act(() => {
      const createTask = result.current[1];

      createTask(testInitialText);
    });

    act(() => {
      const newTaskId = "randomId";

      const changeTask = result.current[2];

      changeTask(newTaskId, testChangedText);
    });

    const tasks = result.current[0];

    expect(tasks.length).toBe(1);
    expect(tasks[0].text).toBe(testInitialText);
  });

  it("should delete task correctly", () => {
    const { result } = renderHook(() => useTasks());

    const testText = "cool task";

    act(() => {
      const createTask = result.current[1];

      createTask(testText);
    });

    act(() => {
      const tasks = result.current[0];
      const newTaskId = tasks[0].id;

      const deleteTask = result.current[3];

      deleteTask(newTaskId);
    });

    const tasks = result.current[0];

    expect(tasks.length).toBe(0);
  });
});

describe("useTasksInfo hook", () => {
  it("should throw error when using outside of provider", () => {
    const { result } = renderHook(() => useTasksInfo());

    expect(result.error).toEqual(
      Error("you should use useTasksInfo inside of TasksProvider")
    );
  });

  it("should return empty tasks list as initial state", () => {
    // https://github.com/testing-library/react-hooks-testing-library/issues/23
    const wrapper: FC = ({ children }) => (
      <TasksContext.Provider value={tasksContextValueMock}>
        {children}
      </TasksContext.Provider>
    );

    const { result } = renderHook(() => useTasksInfo(), { wrapper });

    expect(result.current.tasks.length).toBe(0);
  });
});
