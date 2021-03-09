import ReactDom from "react-dom";

import {TasksProvider} from "./providers/TasksProvider";
import {GlobalTheme} from "./components/GlobalTheme/GlobalTheme";
import {App} from "./App";

ReactDom.render(
  <GlobalTheme>
    <TasksProvider>
      <App />
    </TasksProvider>
  </GlobalTheme>,
  document.querySelector(`#root`)
);
