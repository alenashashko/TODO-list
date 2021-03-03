import {useCallback} from "react";

import {
  Card,
  CardActions,
  CardContent,
  Typography,
  IconButton,
  Tooltip,
  withStyles
} from "@material-ui/core";
import {Delete as DeleteIcon, Edit as EditIcon} from "@material-ui/icons";

import {useTasksInfo} from "../../../lib/providers/TasksProvider";

import {styles} from "./TaskViewMode.styles";

const TaskViewMode = (props) => {
  const { task, onEditClick, classes } = props;
  const { date, text, id } = task;
  const { deleteTask } = useTasksInfo();

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
            {date}
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

export default withStyles(styles)(TaskViewMode);
