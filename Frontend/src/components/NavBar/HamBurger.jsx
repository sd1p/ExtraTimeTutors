import React from "react";
import { useState } from "react";
import RightNav from "./RightNav";
const HamBurger = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className="burger"
        open={open}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div
          className={`burger-icon ${open ? "burger-icon-open-one" : ""}`}
          style={{ backgroundColor: `${open ? "#ccc" : "#333"}` }}
        />
        <div
          className={`burger-icon ${open ? "burger-icon-open-two" : ""}`}
          style={{ backgroundColor: `${open ? "#ccc" : "#333"}` }}
        />
        <div
          className={`burger-icon ${open ? "burger-icon-open-three" : ""}`}
          style={{ backgroundColor: `${open ? "#ccc" : "#333"}` }}
        />
      </div>
      
      <RightNav open={open} />
    </>
  );
};

export default HamBurger;
