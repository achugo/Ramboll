import { useState } from "react";
import jsonServer from "../api/jsonServer";
import { State as Todos } from "../context/types";

// new type to omit the completed field as response api doesn't have it
type TodoApiResponse = Omit<Todos, "completed">;

export const useLoadPreviousTasks = (): [
  TodoApiResponse[],
  boolean,
  string,
  () => Promise<void>
] => {
  const [previousTodos, setPreviousTodos] = useState<TodoApiResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  // fetch post from external api
  const fetchTodos = async () => {
    setLoading(true);
    try {
      const response = await jsonServer.get("/posts");
      const todos: TodoApiResponse[] = response.data;
      setPreviousTodos(todos);
    } catch (error) {
      console.warn(error);
      setError("Tasks could not be loaded.");
    } finally {
      setLoading(false);
    }
  };

  return [previousTodos, loading, error, fetchTodos];
};
