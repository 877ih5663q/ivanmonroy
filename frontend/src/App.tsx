// src/App.tsx
import { useState } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

function App() {
  const [refreshTasks, setRefreshTasks] = useState(false);

  const handleTaskCreated = () => {
    setRefreshTasks((prev) => !prev);
  };

  return (
    <div className="p-2">
      <TaskForm onTaskCreated={handleTaskCreated} />
      <TaskList key={refreshTasks.toString()} />
    </div>
  );
}

export default App;
