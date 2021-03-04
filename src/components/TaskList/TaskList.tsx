import {FC} from "react";
import {Grid} from "@material-ui/core";

import {useTasksInfo} from "../../providers/TasksProvider";
import {Task} from "../Task/Task";

export const TaskList: FC = () => {
  const {tasks} = useTasksInfo();

  tasks.sort((a, b) => b.date - a.date);

  return (
    <Grid container spacing={3}>
      {tasks.sort().map((task:Task) =>
        <Grid key={task.id} item xs={12} sm={6}>
          <Task task={task} />
        </Grid>
      )}
    </Grid>
  );
};
