import {FC, useState, useCallback} from "react";
import {
  Card,
  CardContent,
  Button,
  TextField,
  Grid,
  withStyles,
  Typography
} from "@material-ui/core";

import {useTasksInfo} from "../../providers/TasksProvider";

import {styles} from "./NewTaskForm.styles";

interface NewTaskFormProps {
  classes: {
    title: object;
    stretch: object;
  }
}

const NewTaskForm: FC<NewTaskFormProps> = (props) => {
  const {classes} = props;

  const {createTask} = useTasksInfo();

  const [taskText, setTaskText] = useState(""); // ?

  const handleTaskTextChange = useCallback((evt) => { // ?
    setTaskText(evt.target.value);
  }, []);

  const handleTaskCreation = useCallback((evt) => { // ?
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
        <form onSubmit={handleTaskCreation}>
          <Grid container alignItems="flex-end" spacing={2}>
            <Grid item xs={12} sm={9}>
              <TextField
                className={classes.stretch}
                name="task"
                placeholder="Start typing your text here..."
                multiline
                rowsMax={15}
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

export default withStyles(styles)(NewTaskForm);
