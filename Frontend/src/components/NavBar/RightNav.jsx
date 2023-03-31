import React from "react";
import { Link } from "react-router-dom";

const RightNav = ({open}) => {
    //console.log(open);
  return (

    <ul className={`${open?'ul-show':'ul-close'}`}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About Us</Link></li>
      <li><Link to="/apidocs">Docs</Link></li>
      {/*TODO Add login and SignUp */}
    </ul>
  );
};

export default RightNav;
