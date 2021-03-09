import {FC, useState, useCallback, ChangeEvent} from "react";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  TextField,
  IconButton,
  Tooltip
} from "@material-ui/core";
import {Save as SaveIcon, Cancel as CancelIcon} from "@material-ui/icons";

import {useTasksInfo} from "../../../providers/TasksProvider";
import {Task} from "../Task";

import {formatDate} from "../../../utils/dates";

import {useStyles} from "./TaskEditMode.styles";

interface TaskEditModeProps {
  task: Task;
  onFinish: () => void;
}

export const TaskEditMode: FC<TaskEditModeProps> = (props) => {
  const {task, onFinish} = props;
  const {date, text, id} = task;

  const {changeTask} = useTasksInfo();
  const classes = useStyles();

  const [taskText, setTaskText] = useState<string>(text);

  const handleTaskTextChange = useCallback((evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTaskText((evt.target as HTMLTextAreaElement).value);
  }, []);

  const handleSaveEditing = useCallback(() => {
    changeTask(id, taskText);
    onFinish();
  }, [changeTask, onFinish, id, taskText]);

  return (
    <Card className={classes.task}>
      <CardContent className={classes.content}>
        <TextField
          className={classes.text}
          name="task"
          placeholder="Start typing your text here..."
          multiline
          value={taskText}
          onChange={handleTaskTextChange}
        />
      </CardContent>
      <CardActions className={classes.footer}>
        <div className={classes.footerContainer}>
          <Typography color="textSecondary">
            {formatDate(date)}
          </Typography>
          <div className={classes.buttons}>
            <Tooltip title="Save" placement="top" arrow>
              <span>
                <IconButton
                  data-testid="save"
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
                data-testid="cancel"
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
