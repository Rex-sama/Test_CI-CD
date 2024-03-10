import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../actions/action";

const Counter = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(data);
  return (
    <div>
      <h1> Counter </h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
