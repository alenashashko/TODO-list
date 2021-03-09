import { render, cleanup } from "@testing-library/react";
import { App } from "./App";
import { TasksProvider } from "./providers/TasksProvider";

afterEach(cleanup);

it("renders app", () => {
  const { asFragment } = render(
    <TasksProvider>
      <App />
    </TasksProvider>
  );

  expect(asFragment()).toMatchSnapshot();
});
