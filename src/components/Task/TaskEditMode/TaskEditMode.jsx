import React, {useState, useCallback} from "react";

export const TaskEditMode = (props) => {
  const {task, onModeChange, onTaskChange} = props;
  const {date, text, id} = task;

  const [taskText, setTaskText] = useState(text);

  const handleTaskTextChange = useCallback((evt) => {
    setTaskText(evt.target.value);
  }, []);

  const handleSaveEditing = useCallback(() => {
    onTaskChange(id, taskText);
    onModeChange("view");
  }, [onTaskChange, onModeChange, id, taskText]);

  const handleCancelEditing = useCallback(() => {
    onModeChange("view");
  }, [onModeChange]);

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
      <button className="task-edit__cancel" onClick={handleCancelEditing}>Cancel</button>
    </div>
  );
};
