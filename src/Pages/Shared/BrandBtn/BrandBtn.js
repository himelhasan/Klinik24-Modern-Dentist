import React from "react";
import { Link } from "react-router-dom";
import "./brandbutton.css";
const BrandBtn = ({ children, to }) => {
  return (
    <>
      <button className="BrandBtn flex">
        <Link to={to} className="flex gap-2 align-center items-center">
          {" "}
          {children}
        </Link>
      </button>
    </>
  );
};

export default BrandBtn;
