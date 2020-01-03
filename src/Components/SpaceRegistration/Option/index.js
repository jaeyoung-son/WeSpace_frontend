import React from "react";
import "./Option.scss";

const Option = ({ option, classname }) => {
  return (
    <span className="option">
      <span className={classname}>{option}</span>
    </span>
  );
};

export default Option;
