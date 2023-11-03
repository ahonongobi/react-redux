import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store/actions";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.count); // 'counter' is the slice name defined in combineReducers

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <div>count: {count} </div>
      <button onClick={handleIncrement}> Increment </button>
      <button onClick={handleDecrement}> Decrement </button>
    </div>
  );
};

export default Counter;
