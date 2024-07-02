import { Action, State } from "./types";

export function reducer(state: State[], action: Action) {
  switch (action.type) {
    case "fetch_todo":
      return action.payload;
    case "add_todo":
      return state ? [...state, action.payload] : [action.payload];

    case "complete_todo":
      return state.map((todo) => {
        return todo.id === action.payload.id ? action.payload : todo;
      });

    case "filter_uncompleted":
      return action.payload
        ? action.payload.filter((todo) => !todo.completed)
        : state;

    case "add_due_date":
      return state.map((todo) => {
        return todo.id === action.payload.id ? action.payload : todo;
      });

    case "filter_completed":
      return action.payload
        ? action.payload.filter((todo) => todo.completed)
        : state;

    case "filter_due_date":
      console.log(action.payload, state);
      return action.payload
        ? action.payload.store.filter((todo) => {
            return (
              new Date(action.payload.date).getTime() >=
              new Date(todo.dueDate as string).getTime()
            );
          })
        : state;

    case "delete_todo":
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return state;
  }
}
