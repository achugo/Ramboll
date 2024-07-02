import { Dispatch } from "react";

export interface State {
  id: number;
  title: string;
  completed?: boolean;
  dueDate?: string;
}

export type Action =
  | { type: "add_todo"; payload: State }
  | { type: "fetch_todo"; payload: State[] }
  | { type: "delete_todo"; payload: number }
  | { type: "complete_todo"; payload: State }
  | { type: "filter_uncompleted"; payload: State[] }
  | { type: "filter_completed"; payload: State[] }
  | { type: "add_due_date"; payload: State }
  | { type: "filter_due_date"; payload: { date: string; store: State[] } };

export type StoreApi = {
  state: State[] | null;
  dispatch: Dispatch<Action>;
};
