import React from "react";
import { State as Todo } from "../context/types";
import { useAppContext } from "../context/AppContext";
import { completeTodo } from "../todoActions/completeTodo";
import { deleteTodo } from "../todoActions/deleteTodo";
import { updateDueDate } from "../todoActions/updateDueDate";

interface Props {
  todo: Todo;
}

export const TodoItem: React.FC<Props> = ({ todo }) => {
  const { dispatch } = useAppContext();

  // use the status of todo completed in store and previous task api response to check task completion
  const isTaskCompleted = todo.completed || todo.completed === undefined;

  const handleCompleteTodo = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    completeTodo(dispatch, { ...todo, completed: event.target.checked });
  };

  const handleDeleteTodo = () => {
    // quick dialog using an alert to confirm deletion :)
    if (
      typeof window !== "undefined" &&
      window.confirm(`Are you sure you want to delete this task?`)
    ) {
      // Delete this!
      deleteTodo(dispatch, todo.id);
    } else {
      // Do nothing!
      return;
    }
  };

  const handleDueDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // convert to ISO date string
    const dueDate = new Date(event.target.value).toISOString();
    updateDueDate(dispatch, { ...todo, dueDate });
  };

  return (
    <div className="my-4">
      <div className="flex">
        <div className="flex-1">
          <input
            className="mx-2"
            onChange={handleCompleteTodo}
            checked={isTaskCompleted}
            type="checkbox"
          />
          <span
            className={`${isTaskCompleted ? "line-through" : ""} capitalize`}
          >
            {todo.title}
          </span>
        </div>

        {todo.completed !== undefined && (
          <div>
            <button
              className={`mx-1 bg-button rounded p-0.5 text-base font-normal: "cursor-pointer"
`}
              type="submit"
              onClick={handleDeleteTodo}
            >
              Delete
            </button>
          </div>
        )}
      </div>
      {todo?.dueDate ? (
        <span className="ml-7 italic text-red-500 text-base relative bottom-2">
          Due date: <>{new Date(todo?.dueDate).toLocaleDateString()}</>
        </span>
      ) : (
        <>
          {todo.completed !== undefined && (
            <input
              type="date"
              onChange={handleDueDateChange}
              className="ml-7 italic"
              placeholder="select due date"
            />
          )}
        </>
      )}
    </div>
  );
};
