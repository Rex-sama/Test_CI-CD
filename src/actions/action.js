// Action Types
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD = "ADD";
export const REMOVE = "REMOVE";

// Action Creators
export const increment = () => {
  return { type: INCREMENT };
};

export const decrement = () => {
  return { type: DECREMENT };
};

export const addTodo = (data) => {
  return {
    type: ADD,
    payload: data,
  };
};

export const removeTodo = (data) => {
  return {
    type: REMOVE,
    payload: data.id,
  };
};
