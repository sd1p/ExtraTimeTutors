import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

import HamBurger from "./HamBurger";
const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="logo"><Link to="/">ExtraTimeTutor</Link></div>
      <HamBurger />
    </div>
  );
};

export default NavBar;
