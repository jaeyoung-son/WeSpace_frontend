import React from "react";

const InfoList = ({ text, index }) => {
  return (
    <p className="info_list">
      {index}
      <span>{text}</span>
    </p>
  );
};

export default InfoList;
