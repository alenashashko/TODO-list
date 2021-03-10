import { render, cleanup } from "@testing-library/react";

import { TaskList } from "./TaskList";

import { useTasksInfo } from "src/providers/TasksProvider";
import { tasksMock } from "src/tests/mocks/tasks";

jest.mock("src/providers/TasksProvider");

afterEach(cleanup);

it("renders task list", () => {
  const mockedUseTasksInfo = useTasksInfo as jest.MockedFunction<
    typeof useTasksInfo
  >;

  mockedUseTasksInfo.mockReturnValue({
    ...useTasksInfo(),
    tasks: tasksMock,
  });

  const { asFragment } = render(<TaskList />);

  expect(asFragment()).toMatchSnapshot();
});
