import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { addTodo } from "../todoActions/AddTodo";
import { State } from "../context/types";

export const AddTodoInput = () => {
  const [input, setInput] = useState<string>("");
  const { dispatch } = useAppContext();

  // disallow users from submitting values less than 3 letters
  const disabledInput = input.length < 3;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handSubmitTodo = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const payload: State = {
      // simple random id generator
      id: Math.floor(Math.random() * 99999),
      title: input,
      completed: false,
    };
    addTodo(dispatch, payload);
    setInput("");
  };

  return (
    <form onSubmit={handSubmitTodo} className="flex">
      <input
        className="bg-input rounded p-[5.5px] font-light flex-1"
        onChange={handleInputChange}
        type="text"
        value={input}
        placeholder="What's your plan?"
      />
      <button
        className={`ml-1 bg-button rounded p-[5.5px] font-medium ${
          disabledInput ? "cursor-not-allowed" : "cursor-pointer"
        }`}
        type="submit"
        disabled={disabledInput}
      >
        Add
      </button>
    </form>
  );
};
