import { Dispatch } from "react";
import { Action, State as Todo } from "../context/types";
import { getFromLocalStore, saveToLocalStore } from "../utils/localStore";

export const deleteTodo = async (dispatch: Dispatch<Action>, id: number) => {
  dispatch({ type: "delete_todo", payload: id });
  const todos = (await getFromLocalStore("todos")) as Todo[];

  //remove deleted item with id from localstorage
  const filteredTodos = todos.filter((todo) => todo.id !== id);
  saveToLocalStore("todos", filteredTodos);
};
