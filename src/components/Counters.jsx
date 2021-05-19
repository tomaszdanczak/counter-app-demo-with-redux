import React from "react";
import { useSelector } from "react-redux";
import Counter from "./Counter";

const Counters = () => {
  const counters = useSelector((state) => state.counters);

  const countersToRender = counters.map((counter) => (
    <Counter key={counter.id} id={counter.id} value={counter.value} />
  ));

  return (
    <div>
      <button className="btn btn-primary btn-sm m2">Reset</button>
      {countersToRender}
    </div>
  );
};

export default Counters;
