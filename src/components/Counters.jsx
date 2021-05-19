import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Counter from "./Counter";
import { reset } from "./../actions";

const Counters = () => {
  const counters = useSelector((state) => state.counters);
  const dispatch = useDispatch();

  const countersToRender = counters.map((counter) => (
    <Counter key={counter.id} id={counter.id} value={counter.value} />
  ));

  return (
    <div>
      <button
        onClick={() => dispatch(reset())}
        className="btn btn-primary btn-sm m2"
      >
        Reset
      </button>
      {countersToRender}
    </div>
  );
};

export default Counters;
