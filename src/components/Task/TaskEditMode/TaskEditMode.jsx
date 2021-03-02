import React, {useState, useCallback} from "react";

import {useTasksInfo} from "../../../lib/providers/TasksProvider";

export const TaskEditMode = (props) => {
  const {task, onFinish} = props;
  const {date, text, id} = task;
  const {changeTask} = useTasksInfo();

  const [taskText, setTaskText] = useState(text);

  const handleTaskTextChange = useCallback((evt) => {
    setTaskText(evt.target.value);
  }, []);

  const handleSaveEditing = useCallback(() => {
    changeTask(id, taskText);
    onFinish();
  }, [changeTask, onFinish, id, taskText]);

  return ( // блокировать кнопку save пока текст не изменен
    <div className="task-edit">
      <span>{date}</span>
      <textarea // отдельный компонент ? форма ?
        className="task-edit__text"
        name="task"
        placeholder="Start typing your text here..."
        value={taskText}
        onChange={handleTaskTextChange}
      />
      <button className="task-edit__save" onClick={handleSaveEditing}>Save</button>
      <button className="task-edit__cancel" onClick={onFinish}>Cancel</button>
    </div>
  );
};
