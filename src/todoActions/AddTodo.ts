import { Dispatch } from "react";
import { Action, State } from "../context/types";
import { getFromLocalStore, saveToLocalStore } from "../utils/localStore";

export const addTodo = async (dispatch: Dispatch<Action>, todo: State) => {
  dispatch({ type: "add_todo", payload: todo });
  const todos = await getFromLocalStore("todos");
  // add new todo to localStorage
  saveToLocalStore("todos", todos ? [...todos, todo] : [todo]);
};
