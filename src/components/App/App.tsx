import { memo } from "react";
import { Container, Grid } from "@material-ui/core";

import { Header } from "src/components/Header";
import { NewTaskForm } from "src/components/NewTaskForm";
import { TaskList } from "src/components/TaskList";
import { Footer } from "src/components/Footer";

import { useStyles } from "./App.styles";

export const App = memo(function AppView() {
  const classes = useStyles();

  return (
    <div className={classes.wrap}>
      <Header />

      <Container maxWidth="sm" className={classes.mainContainer}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <NewTaskForm />
          </Grid>
          <Grid item xs={12}>
            <TaskList />
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </div>
  );
});
