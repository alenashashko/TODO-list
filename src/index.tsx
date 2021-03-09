import { render } from "react-dom";

import { TasksProvider } from "./providers/TasksProvider";
import { GlobalTheme } from "./components/GlobalTheme/GlobalTheme";
import { App } from "./App";

render(
  <GlobalTheme>
    <TasksProvider>
      <App />
    </TasksProvider>
  </GlobalTheme>,
  document.querySelector(`#root`)
);
