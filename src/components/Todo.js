import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "../actions/action";

const ToDo = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  console.log(todos);

  const onAddTodo = () => {
    if (text) {
      dispatch(addTodo({ data: text, id: Math.random() }));
      setText(" ");
    }
  };

  return (
    <div>
      ToDO
      <div>
        <input
          type="text"
          placeholder="Enter todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={onAddTodo}>Add</button>
      </div>
      <div>
        {todos.length !== 0 &&
          todos.map((item) => {
            return (
              <div key={item.id}>
                <span>{item.data}</span>
                <button
                  onClick={() =>
                    dispatch(removeTodo({ data: item.data, id: item.id }))
                  }
                >
                  Remove
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ToDo;
