import React from "react";

const DetailList = ({ leftText, rightText }) => {
  return (
    <li>
      <div></div>
      <span className="space_type">{leftText}</span>
      <span className="space_list">{rightText}</span>
    </li>
  );
};

export default DetailList;
