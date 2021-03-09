import { render, cleanup, act } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import { TasksProvider } from "src/providers/TasksProvider";
import { taskMock } from "src/tests/mocks/tasks";

import { Task, useIsViewMode } from "./Task";

afterEach(cleanup);

describe("Task Component", () => {
  it("renders task in view mode", () => {
    const { asFragment } = render(
      <TasksProvider>
        <Task task={taskMock} initialIsViewMode={true} />
      </TasksProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders task in edit mode", () => {
    const { asFragment } = render(
      <TasksProvider>
        <Task task={taskMock} initialIsViewMode={false} />
      </TasksProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

describe("useIsViewMode hook", () => {
  it("should be true by default", () => {
    const { result } = renderHook(() => useIsViewMode());

    expect(result.current[0]).toBe(true);
  });

  it("should be false if hook argument is false", () => {
    const { result } = renderHook(() => useIsViewMode(false));

    expect(result.current[0]).toBe(false);
  });

  it("should be true if handleViewMode is called", () => {
    const { result } = renderHook(() => useIsViewMode(false));

    act(() => {
      const handleViewMode = result.current[1];

      handleViewMode();
    });

    expect(result.current[0]).toBe(true);
  });

  it("should be false if handleEditMode is called", () => {
    const { result } = renderHook(() => useIsViewMode(true));

    act(() => {
      const handleEditMode = result.current[2];

      handleEditMode();
    });

    expect(result.current[0]).toBe(false);
  });
});
