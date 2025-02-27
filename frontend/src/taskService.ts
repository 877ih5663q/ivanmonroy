import axios from "axios";
import { Task } from "./types";

const API_BASE_URL = import.meta.env.VITE_API_URL;

export const fetchTasks = async (): Promise<Task[]> => {
  const response = await axios.get(`${API_BASE_URL}/task/`);
  return response.data;
};

export const createTask = async (task: Omit<Task, "id">): Promise<Task> => {
  const response = await axios.post(`${API_BASE_URL}/task/`, task);
  return response.data;
};
