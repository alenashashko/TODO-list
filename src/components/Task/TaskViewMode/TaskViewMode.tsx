import {FC, useCallback} from "react";
import dayjs from "dayjs";

import {
  Card,
  CardActions,
  CardContent,
  Typography,
  IconButton,
  Tooltip
} from "@material-ui/core";
import {Delete as DeleteIcon, Edit as EditIcon} from "@material-ui/icons";

import {useTasksInfo} from "../../../providers/TasksProvider";
import {useStyles} from "./TaskViewMode.styles";

import {Task} from "../Task";

interface TaskViewModeProps {
  task: Task;
  onEditClick: () => void;
}

export const TaskViewMode: FC<TaskViewModeProps> = (props) => {
  const {task, onEditClick} = props;
  const {date, text, id} = task;

  const {deleteTask} = useTasksInfo();
  const classes = useStyles();

  const handleTaskDeletion = useCallback(() => {
    deleteTask(id);
  }, [deleteTask]);

  return (
    <Card>
      <CardContent>
        <Typography className={classes.text}>
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <div className={classes.footer}>
          <Typography color="textSecondary">
            {dayjs(date).format(`YYYY-MM-DD HH:mm:ss`)}
          </Typography>
          <div className={classes.buttons}>
            <Tooltip title="Edit" placement="top" arrow>
              <IconButton
                onClick={onEditClick}
                color="primary"
                size="small"
                aria-label="edit task"
              >
                <EditIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete" placement="top" arrow>
              <IconButton
                onClick={handleTaskDeletion}
                color="secondary"
                size="small"
                aria-label="delete task"
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </CardActions>
    </Card>
  );
};
