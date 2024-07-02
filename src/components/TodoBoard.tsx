import React, { useEffect } from "react";
import { AddTodoInput } from "./AddTodoInput";
import { useAppContext } from "../context/AppContext";
import { fetchTodo } from "../todoActions/fetchTodo";
import { TodoItem } from "./TodoItem";
import { TodoFilters } from "./TodoFilters";
import { useLoadPreviousTasks } from "../hooks/useLoadPreviousTasks";

const TodoBoard: React.FC = () => {
  const { state, dispatch } = useAppContext();
  // hook to fetch previous task
  const [previousTodos, loading, error, fetchTodos] = useLoadPreviousTasks();

  // fetch items from store on initial load to persist local storage data
  useEffect(() => {
    fetchTodo(dispatch);
  }, []);

  return (
    <div className="min-w-80 max-w-80 p-5 bg-board rounded-lg mt-20">
      <h4 className="text-xl font-bold mb-3">Today's Task</h4>
      <AddTodoInput />
      <TodoFilters />
      <div>
        {state?.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>

      <div>
        <button
          className="block rounded p-[5.5px] font-semibold my-2 bg-button w-full"
          onClick={fetchTodos}
          disabled={loading}
        >
          {loading ? "Loading tasks..." : "Load Previous tasks"}
        </button>
        <span className="text-filter-text font-light">DD.MM.Y</span>
      </div>

      {previousTodos?.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}

      {error && <h4 className="text-red-500">{error}</h4>}
    </div>
  );
};
export default TodoBoard;
