import React from "react";
import "./loader.css";
import loader1 from "../../../assets/loader/spinner.gif";

const Loader = () => {
  return (
    <div className="spinner">
      <img src={loader1} alt="" />
    </div>
  );
};

export default Loader;
