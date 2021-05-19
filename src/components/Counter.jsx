import React from "react";

const Counter = (props) => {
  const { value } = props;

  return (
    <div>
      <span className={getBadgeClasses(value)}>{formatCount(value)}</span>
      <button className="btn btn-secondary btn-sm">Increment</button>
      <button className="btn btn-danger btn-sm m-2">Delete</button>
    </div>
  );
};

export default Counter;

const getBadgeClasses = (value) => {
  let classes = "badge m-2 badge-";
  classes += value === 0 ? "warning" : "primary";
  return classes;
};

const formatCount = (value) => {
  return value === 0 ? "Zero" : value;
};
