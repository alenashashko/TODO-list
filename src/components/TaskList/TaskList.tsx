import {FC, useMemo} from "react";
import {Grid} from "@material-ui/core";

import {useTasksInfo} from "../../providers/TasksProvider";
import {Task} from "../Task/Task";

export const TaskList: FC = () => {
  const {tasks} = useTasksInfo();

  const sortedTasks = useMemo(() => {
    return tasks.slice().sort((a, b) => b.date - a.date);
  }, [tasks]);

  return (
    <Grid container spacing={3}>
      {sortedTasks.map((task:Task) =>
        <Grid key={task.id} item xs={12} sm={6}>
          <Task task={task} />
        </Grid>
      )}
    </Grid>
  );
};
