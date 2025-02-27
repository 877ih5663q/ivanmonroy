import { useState } from "react";
import { TaskPriority, TaskStatus } from "./types";
import { createTask } from "./taskService";

const TaskForm = ({ onTaskCreated }: { onTaskCreated: () => void }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<TaskStatus>("To do");
  const [priority, setPriority] = useState<TaskPriority>("Medium");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newTask = { title, description, status, priority };
    await createTask(newTask);
    onTaskCreated();
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 space-y-4">
      <div className="mb-1">
        <label className="block mb-1">Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-1"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border p-1"
          required
        />
      </div>
      <div>
        <label>Status:</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as TaskStatus)}
          className="w-full border p-1"
        >
          <option value="To do">Todo</option>
          <option value="In progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </div>
      <div>
        <label>Priority:</label>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value as TaskPriority)}
          className="w-full border p-1"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <button type="submit" className="w-full bg-gray-200 p-1">Create task</button>
    </form>
  );
};

export default TaskForm;
