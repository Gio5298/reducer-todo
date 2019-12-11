import React, { useState, useReducer } from 'react';
import { initialState, reducer } from '../reducer/reducer';
import TodoList from './todoList'

const Todo = () => {

  return (
    <div>
      <TodoList />
    </div>
  )
}


export default Todo;