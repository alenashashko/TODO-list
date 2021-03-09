import React, { FC, useState, useCallback, ChangeEvent, FormEvent } from "react";
import {
  Card,
  CardContent,
  Button,
  TextField,
  Grid,
  Typography
} from "@material-ui/core";

import { useTasksInfo } from "../../providers/TasksProvider";
import { useStyles } from "./NewTaskForm.styles";

export const NewTaskForm: FC = () => {
  const classes = useStyles();
  const {createTask} = useTasksInfo();

  const [taskText, setTaskText] = useState<string>("");

  const handleTaskTextChange = useCallback((evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTaskText((evt.target as HTMLInputElement).value);
  }, []);

  const handleTaskCreation = useCallback((evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    createTask(taskText);

    setTaskText("");
  }, [createTask, taskText]);

  return (
    <Card>
      <CardContent>
        <Typography className={classes.title} variant="h5" component="h2">
          Create new task
        </Typography>
        <form data-testid="form" onSubmit={handleTaskCreation}>
          <Grid container alignItems="flex-end" spacing={2}>
            <Grid item xs={12} sm={9}>
              <TextField
                className={classes.stretch}
                name="task"
                placeholder="Start typing your text here..."
                multiline
                value={taskText}
                onChange={handleTaskTextChange}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Button
                className={classes.stretch}
                type="submit"
                size="small"
                variant="contained"
                color="primary"
                disabled={taskText.length === 0}
              >
                Create task
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};
