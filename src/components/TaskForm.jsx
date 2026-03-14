import React, { useState, useId, useContext } from "react";
import { TaskContext, useTasks } from "../context/TaskContext";

function TaskForm() {
  const [taskName, setTaskName] = useState("");
  const { addTask } = useTasks()
  const id = useId()

  function handleSubmit(e) {
    e.preventDefault();
    if (taskName.trim() === "") return;
    setTaskName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>New Task:</label>
      <input
        id={id}
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Add a new task..."
      />
      <button type="submit" onClick={() => addTask(taskName)}>Add Task</button>
    </form>
  );
}

export default TaskForm;
