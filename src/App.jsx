import React from "react";
import Container from "@material-ui/core/Container";

import {NewTaskForm} from "./components/NewTaskForm/NewTaskForm";
import {TaskList} from "./components/TaskList/TaskList";

export const App = React.memo(() => {
  return (
    <Container maxWidth="sm">
      <NewTaskForm />
      <TaskList />
    </Container>
  );
});
