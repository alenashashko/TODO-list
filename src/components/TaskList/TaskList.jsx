import React from "react";
import {Grid} from "@material-ui/core";

import {useTasksInfo} from "../../lib/providers/TasksProvider";
import {Task} from "../Task/Task";

export const TaskList = () => {
  const {tasks} = useTasksInfo();

  return (
    <Grid container spacing={3}>
      {tasks.map((task) =>
        <Grid key={task.id} item xs={12} sm={6}>
          <Task task={task} />
        </Grid>
      )}
    </Grid>
  );
};
