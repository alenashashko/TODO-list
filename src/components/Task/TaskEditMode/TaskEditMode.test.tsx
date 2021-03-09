import { render, cleanup, fireEvent } from "@testing-library/react";

import { TaskEditMode } from "./TaskEditMode";

import { useTasksInfo } from "../../../providers/TasksProvider";
import { taskMock, tasksContextValueMock } from "../../../tests/mocks/tasks";

jest.mock("../../../providers/TasksProvider");

afterEach(cleanup);

it("renders task edit mode", () => {
  const mockedUseTasksInfo = useTasksInfo as jest.MockedFunction<typeof useTasksInfo>;

  mockedUseTasksInfo.mockReturnValue(tasksContextValueMock);

  const { asFragment } = render(
    <TaskEditMode
      task={taskMock}
      onFinish={() => { }}
    />);

  expect(asFragment()).toMatchSnapshot();
});

it("should call changeTask with correct id and text", () => {
  const mockedUseTasksInfo = useTasksInfo as jest.MockedFunction<typeof useTasksInfo>;

  const mockedChangeTask = jest.fn();

  mockedUseTasksInfo.mockReturnValue({
    ...useTasksInfo(),
    changeTask: mockedChangeTask,
  });

  const { getByPlaceholderText, getByTestId } = render(<TaskEditMode
    task={taskMock}
    onFinish={() => { }}
  />);

  const input = getByPlaceholderText("Start typing your text here...");

  const testText = "Learn JavaScript";

  fireEvent.change(input, {
    target: {
      value: testText,
    },
  });

  const saveButton = getByTestId("save");

  fireEvent.click(saveButton);

  expect(mockedChangeTask).toHaveBeenCalledTimes(1);
  expect(mockedChangeTask).toHaveBeenLastCalledWith(taskMock.id, testText);
});

it("should call onFinish when saveButton clicked", () => {
  const mockedUseTasksInfo = useTasksInfo as jest.MockedFunction<typeof useTasksInfo>;

  mockedUseTasksInfo.mockReturnValue(tasksContextValueMock);

  const mockedFinishEditing = jest.fn();

  const { getByPlaceholderText, getByTestId } = render(<TaskEditMode
    task={taskMock}
    onFinish={mockedFinishEditing}
  />);

  const input = getByPlaceholderText("Start typing your text here...");
  const testText = "Learn JavaScript";

  fireEvent.change(input, {
    target: {
      value: testText
    },
  });

  const saveButton = getByTestId("save");

  fireEvent.click(saveButton);

  expect(mockedFinishEditing).toHaveBeenCalledTimes(1);
});

it("should call onFinish when cancelButton clicked", () => {
  const mockedUseTasksInfo = useTasksInfo as jest.MockedFunction<typeof useTasksInfo>;

  mockedUseTasksInfo.mockReturnValue(tasksContextValueMock);

  const mockedFinishEditing = jest.fn();

  const { getByTestId } = render(<TaskEditMode
    task={taskMock}
    onFinish={mockedFinishEditing}
  />);

  const cancelButton = getByTestId("cancel");

  fireEvent.click(cancelButton);

  expect(mockedFinishEditing).toHaveBeenCalledTimes(1);
});
