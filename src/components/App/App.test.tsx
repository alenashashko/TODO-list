import { render, cleanup } from "@testing-library/react";
import { App } from "src/components/App";
import { TasksProvider } from "src/providers/TasksProvider";

afterEach(cleanup);

it("renders app", () => {
  const { asFragment } = render(
    <TasksProvider>
      <App />
    </TasksProvider>
  );

  expect(asFragment()).toMatchSnapshot();
});
