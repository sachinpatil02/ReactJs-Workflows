import React from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <NavLink className="navbar-brand" to={"/sign-in"}>FLOWAPP</NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to={"/sign-in"}>Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/sign-up"}>Sign up</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/tasks/add"}>View Task</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
