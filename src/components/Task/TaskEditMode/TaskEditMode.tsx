import {FC, useState, useCallback} from "react";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  TextField,
  IconButton,
  Tooltip,
  withStyles
} from "@material-ui/core";
import {Save as SaveIcon, Cancel as CancelIcon} from "@material-ui/icons";

import {useTasksInfo} from "../../../lib/providers/TasksProvider";
import {TaskInterface} from "../Task";

import {styles} from "./TaskEditMode.styles";

interface TaskEditModeProps {
  task: TaskInterface;
  onFinish: () => void; // ???
  classes: {
    content: object;
    text: object;
    footer: object;
    buttons: object;
  }; // ???
}

const TaskEditMode: FC<TaskEditModeProps> = (props) => {
  const {task, onFinish, classes} = props;
  const {date, text, id} = task;
  const {changeTask} = useTasksInfo();

  const [taskText, setTaskText] = useState(text); // ?

  const handleTaskTextChange = useCallback((evt) => { // ?
    setTaskText(evt.target.value);
  }, []);

  const handleSaveEditing = useCallback(() => {
    changeTask(id, taskText);
    onFinish();
  }, [changeTask, onFinish, id, taskText]);

  return (
    <Card>
      <CardContent className={classes.content}>
        <TextField className={classes.text}// отдельный компонент ?
          name="task"
          placeholder="Start typing your text here..."
          multiline
          rowsMax={15}
          value={taskText}
          onChange={handleTaskTextChange}
        />
      </CardContent>
      <CardActions>
        <div className={classes.footer}>
          <Typography color="textSecondary">
            {date}
          </Typography>
          <div className={classes.buttons}>
            <Tooltip title="Save" placement="top" arrow>
              <span>
                <IconButton
                  onClick={handleSaveEditing}
                  color="primary"
                  size="small"
                  aria-label="save changes"
                  disabled={taskText === text || taskText.length === 0}
                >
                  <SaveIcon fontSize="small"/>
                </IconButton>
              </span>
            </Tooltip>
            <Tooltip title="Cancel" placement="top" arrow>
              <IconButton
                onClick={onFinish}
                color="secondary"
                size="small"
                aria-label="cancel changes"
              >
                <CancelIcon fontSize="small"/>
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </CardActions>
    </Card>
  );
};

export default withStyles(styles)(TaskEditMode);
