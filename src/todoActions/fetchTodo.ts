import { Dispatch } from "react";
import { Action } from "../context/types";
import { getFromLocalStore } from "../utils/localStore";

export const fetchTodo = async (dispatch: Dispatch<Action>) => {
  try {
    // get all todos from localstore
    const todos = await getFromLocalStore("todos");
    dispatch({ type: "fetch_todo", payload: todos });
  } catch (error) {
    console.warn(error);
  }
};
