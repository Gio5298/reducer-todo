import React, { useState, useReducer } from "react";
import { initialState, reducer } from "../reducer/reducer";
import TodoForm from "./todoForm";
import CardMap from "./cardMap"

const TodoList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <TodoForm dispatch={dispatch} />
      <div className="container">
        {state.map(bMap => (
          <CardMap key={bMap.id} bMap={bMap} dispatch={dispatch} />
        ))}
      </div>
    </div>
  );
};
export default TodoList;