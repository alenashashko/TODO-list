import {render, cleanup, fireEvent} from "@testing-library/react";

import {TaskViewMode} from "./TaskViewMode";

import {useTasksInfo} from "../../../providers/TasksProvider";
import { taskMock, tasksContextValueMock } from "../../../tests/mocks/tasks";

jest.mock("../../../providers/TasksProvider");

afterEach(cleanup);

it("renders task view mode", () => {
  const mockedUseTasksInfo = useTasksInfo as jest.MockedFunction<typeof useTasksInfo>;

  mockedUseTasksInfo.mockReturnValue(tasksContextValueMock);

  const {asFragment} = render(
    <TaskViewMode
      task={taskMock}
      onEditClick={() => {}}
    />);

  expect(asFragment()).toMatchSnapshot();
});

it("should call onEditClick", () => {
  const mockedUseTasksInfo = useTasksInfo as jest.MockedFunction<typeof useTasksInfo>;

  mockedUseTasksInfo.mockReturnValue(tasksContextValueMock);

  const mockedEditTask = jest.fn();

  const {getByTestId} = render(<TaskViewMode
    task={taskMock}
    onEditClick={mockedEditTask}
  />);

  const editButton = getByTestId("edit");

  fireEvent.click(editButton);

  expect(mockedEditTask).toHaveBeenCalledTimes(1);
});

it("should call deleteTask with correct id", () => {
  const mockedUseTasksInfo = useTasksInfo as jest.MockedFunction<typeof useTasksInfo>;

  const mockedDeleteTask = jest.fn();

  mockedUseTasksInfo.mockReturnValue({
    ...useTasksInfo(),
    deleteTask: mockedDeleteTask,
  });

  const {getByTestId} = render(<TaskViewMode
    task={taskMock}
    onEditClick={() => {}}
  />);

  const deleteButton = getByTestId("delete");

  fireEvent.click(deleteButton);

  expect(mockedDeleteTask).toHaveBeenCalledTimes(1);
  expect(mockedDeleteTask).toHaveBeenLastCalledWith(taskMock.id);
});
