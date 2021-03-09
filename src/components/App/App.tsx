import { memo } from "react";
import { Container, Grid } from "@material-ui/core";

import { Header } from "../Header/Header";
import { NewTaskForm } from "../NewTaskForm/NewTaskForm";
import { TaskList } from "../TaskList/TaskList";
import { Footer } from "../Footer/Footer";

import { useStyles } from "./App.styles";

export const App = memo(function AppView() {
  const classes = useStyles();

  return (
    <div className={classes.wrap}>
      <Header />

      <Container maxWidth="sm" className={classes.mainContainer}>
        <Grid container spacing={3}>
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
