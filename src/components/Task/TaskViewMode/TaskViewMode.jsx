import React, {useCallback} from "react";

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import {useTasksInfo} from "../../../lib/providers/TasksProvider";

export const TaskViewMode = (props) => {
  const {task, onEditClick} = props;
  const {date, text, id} = task;
  const {deleteTask} = useTasksInfo();

  const handleTaskDeletion = useCallback(() => {
    deleteTask(id);
  }, [deleteTask]);

  return (
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {date}
        </Typography>
        <Typography variant="body1">
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button className="task__edit" onClick={onEditClick} size="small">Edit</Button>
        <Button className="task__delete" onClick={handleTaskDeletion} size="small">Delete</Button>
      </CardActions>
    </Card>
  );
};
