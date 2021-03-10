import { render } from "react-dom";

import { GlobalTheme } from "src/components/GlobalTheme";
import { TasksProvider } from "src/providers/TasksProvider";
import { App } from "src/components/App";
import { registerSW } from "src/utils/registerSW";

render(
  <GlobalTheme>
    <TasksProvider>
      <App />
    </TasksProvider>
  </GlobalTheme>,
  document.querySelector(`#root`)
);

registerSW();
