import React from "react";

const RefundList = ({ day, money }) => {
  return (
    <p className="info_list refund_day">
      {day}
      <span className="refund_per">{money}</span>
    </p>
  );
};

export default RefundList;
