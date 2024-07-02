import { Dispatch } from "react";
import { Action, State as Todo } from "../context/types";
import { getFromLocalStore, saveToLocalStore } from "../utils/localStore";

export const completeTodo = async (dispatch: Dispatch<Action>, todo: Todo) => {
  dispatch({ type: "complete_todo", payload: todo });
  const todos = await getFromLocalStore("todos");
  saveToLocalStore(
    "todos",
    todos.map((item: Todo) => {
      return item.id === todo.id ? todo : item;
    })
  );
};
