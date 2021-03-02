import React, {Fragment} from "react";

import {NewTaskForm} from "./components/NewTaskForm/NewTaskForm";
import {TaskList} from "./components/TaskList/TaskList";

export const App = React.memo(() => {
  return (
    <Fragment>
      <NewTaskForm />
      <TaskList />
    </Fragment>
  );
});
