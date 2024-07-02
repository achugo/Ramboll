import { Dispatch } from "react";
import { Action, State as Todo } from "../context/types";

export const filterByDueDate = async (
  dispatch: Dispatch<Action>,
  date: string,
  store: Todo[]
) => {
  dispatch({ type: "filter_due_date", payload: { date, store } });
};
