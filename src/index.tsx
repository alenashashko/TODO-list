import { render } from "react-dom";

import { GlobalTheme } from "src/components/GlobalTheme";
import { TasksProvider } from "src/providers/TasksProvider";
import { App } from "src/components/App";

render(
  <GlobalTheme>
    <TasksProvider>
      <App />
    </TasksProvider>
  </GlobalTheme>,
  document.querySelector(`#root`)
);
