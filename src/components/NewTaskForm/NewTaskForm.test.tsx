import { render, cleanup, fireEvent } from "@testing-library/react";

import { NewTaskForm } from "./NewTaskForm";

import { useTasksInfo } from "../../providers/TasksProvider";
import { tasksContextValueMock } from "../../tests/mocks/tasks";

jest.mock("../../providers/TasksProvider");

afterEach(cleanup);

it("renders new task form", () => {
  const mockedUseTasksInfo = useTasksInfo as jest.MockedFunction<
    typeof useTasksInfo
  >;

  mockedUseTasksInfo.mockReturnValue(tasksContextValueMock);

  const { asFragment } = render(<NewTaskForm />);

  expect(asFragment()).toMatchSnapshot();
});

it("should call createTask with correct text", () => {
  const mockedUseTasksInfo = useTasksInfo as jest.MockedFunction<
    typeof useTasksInfo
  >;

  const mockedCreateTask = jest.fn();

  mockedUseTasksInfo.mockReturnValue({
    ...useTasksInfo(),
    createTask: mockedCreateTask,
  });

  const { getByPlaceholderText, getByTestId } = render(<NewTaskForm />);

  const input = getByPlaceholderText("Start typing your text here...");
  const testText = "Learn JavaScript";

  fireEvent.change(input, {
    target: {
      value: testText,
    },
  });

  const form = getByTestId("form");

  fireEvent.submit(form);

  expect(mockedCreateTask).toHaveBeenCalledTimes(1);
  expect(mockedCreateTask).toHaveBeenLastCalledWith(testText);
});
