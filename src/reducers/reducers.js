import { ADD, REMOVE } from "../actions/action";

const initialState = {
  todos: [],
};

const reducerFunction = (state = initialState, action) => {
  switch (action.type) {
    case ADD: {
      return { ...initialState, todos: [...state.todos, action.payload] };
    }
    case REMOVE: {
      return {
        ...initialState,
        todos: state.todos.filter((item) => item.id !== action.payload),
      };
    }
    default: {
      return initialState;
    }
  }
};

export default reducerFunction;
