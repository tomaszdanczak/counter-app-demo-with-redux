import React from "react";

const Counter = (props) => {
  const { value } = props;

  return (
    <div>
      <span>{value}</span>
      <button>Increment</button>
      <button>Delete</button>
    </div>
  );
};

export default Counter;
