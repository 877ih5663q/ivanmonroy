import { useEffect, useState } from "react";
import { Task } from "./types";
import { fetchTasks } from "./taskService";

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const loadTasks = async () => {
      const fetchedTasks = await fetchTasks();
      setTasks(fetchedTasks);
    };
    loadTasks();
  }, []);

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="mb-1">
            <strong>{task.title}</strong> - {task.status} (Priority: {task.priority})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
