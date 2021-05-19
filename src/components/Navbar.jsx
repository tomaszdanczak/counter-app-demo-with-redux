import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const counters = useSelector((state) => state.counters);
  const totalCounters = counters.filter((c) => c.value > 0).length;

  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
