import React from "react";

const CheckListSelect = ({
  btnClassName,
  liClassName,
  handleClick,
  message
}) => {
  return (
    <li className={liClassName} onClick={handleClick}>
      <button type="reset" className={btnClassName} />
      <span>{message}</span>
    </li>
  );
};

export default CheckListSelect;
