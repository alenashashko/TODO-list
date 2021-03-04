import {Grid} from "@material-ui/core";

import {useTasksInfo} from "../../lib/providers/TasksProvider";
import {TaskInterface, Task} from "../Task/Task";

export const TaskList = () => {
  const {tasks} = useTasksInfo();

  console.log(typeof tasks[0].date);

  return (
    <Grid container spacing={3}>
      {tasks.map((task:TaskInterface) =>
        <Grid key={task.id} item xs={12} sm={6}>
          <Task task={task} />
        </Grid>
      )}
    </Grid>
  );
};
