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

// https://developers.google.com/web/tools/workbox/modules/workbox-window
async function checkForServiceWorker() {
  if ("serviceWorker" in navigator) {
    const { Workbox } = await import("workbox-window");

    const wb = new Workbox("/sw.js");

    wb.register();
  }
}

checkForServiceWorker();
