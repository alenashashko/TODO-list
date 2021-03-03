import {memo} from "react";
import {Container, Grid} from "@material-ui/core";

import NewTaskForm from "./components/NewTaskForm/NewTaskForm";
import {TaskList} from "./components/TaskList/TaskList";

export const App = memo(() => {
  return (
    <Container maxWidth="sm">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <NewTaskForm/>
        </Grid>
        <Grid item xs={12}>
          <TaskList />
        </Grid>
      </Grid>
    </Container>
  );
});
