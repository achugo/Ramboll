import { Dispatch } from "react";
import { Action, State as Todo } from "../context/types";
import { getFromLocalStore, saveToLocalStore } from "../utils/localStore";

export const updateDueDate = async (dispatch: Dispatch<Action>, todo: Todo) => {
  dispatch({ type: "add_due_date", payload: todo });
  const todos = await getFromLocalStore("todos");
  //update localstorage
  saveToLocalStore(
    "todos",
    todos.map((item: Todo) => {
      return item.id === todo.id ? todo : item;
    })
  );
};
