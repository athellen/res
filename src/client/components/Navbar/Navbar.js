import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand">
          <img src="#" alt="" />
        </a>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link">
              Profile
            </a>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link">
              About
            </a>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
