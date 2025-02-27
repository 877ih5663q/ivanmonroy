export interface Task {
  id: string;
  title: string;
  description: string;
  status: "To do" | "In progress" | "Done";
  priority: "Low" | "Medium" | "High";
}

export type TaskStatus = Task["status"];
export type TaskPriority = Task["priority"];
