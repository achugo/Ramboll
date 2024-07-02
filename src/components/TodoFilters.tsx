import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { getFromLocalStore } from "../utils/localStore";
import { filterByDueDate } from "../todoActions/filterByDueDate";
import { getNoOfDaysAhead } from "../utils/dateUtils";

export const TodoFilters = () => {
  const [activeTab, setActiveTab] = useState("ALL");
  const { dispatch, state } = useAppContext();

  const fetchTodos = async () => {
    try {
      const todos = await getFromLocalStore("todos");
      return todos;
    } catch (error) {
      console.warn(error);
      return [];
    }
  };

  const FILTER_BUTTONS: { text: string; onClick: () => void }[] = [
    {
      text: "ALL",
      onClick: async () =>
        dispatch({ type: "fetch_todo", payload: await fetchTodos() }),
    },
    {
      text: "DONE",
      onClick: async () =>
        dispatch({ type: "filter_completed", payload: await fetchTodos() }),
    },
    {
      text: "OPEN",
      onClick: async () =>
        dispatch({ type: "filter_uncompleted", payload: await fetchTodos() }),
    },
  ];

  const handleFilterChange = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    if (event.target.value === "") {
      dispatch({ type: "fetch_todo", payload: await fetchTodos() });
      return;
    }
    const filterValue = new Date(parseInt(event.target.value)).toISOString();
    filterByDueDate(dispatch, filterValue, await fetchTodos());
  };

  return (
    <div>
      <div className="flex justify-between my-4">
        <span className="text-filter-text font-light">DD.MM.Y</span>
        <div>
          {state != null &&
            FILTER_BUTTONS.map((button) => (
              <button
                key={button.text}
                onClick={() => {
                  setActiveTab(button.text);
                  button.onClick();
                }}
                className={`ml-2.5 text-filter-text  ${
                  activeTab === button.text ? "font-semibold" : "font-light"
                }`}
              >
                {button.text}
              </button>
            ))}
        </div>
      </div>
      {state !== null && (
        <div className="mb-4">
          <label htmlFor="dueDateFilter" className="mr-2">
            Filter by Due Date:
          </label>
          <select
            id="dueDateFilter"
            onChange={handleFilterChange}
            className="p-2 border"
          >
            <option value="">All</option>
            <option value={getNoOfDaysAhead(0)}>Today</option>
            <option value={getNoOfDaysAhead(7)}>Next 7 Days</option>
            <option value={getNoOfDaysAhead(14)}>Next 14 Days</option>
            <option value={getNoOfDaysAhead(30)}>Next Month</option>
          </select>
        </div>
      )}
    </div>
  );
};
