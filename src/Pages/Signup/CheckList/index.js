import React from "react";

const CheckList = ({ btnClassName, liClassName, href, message }) => {
  return (
    <li className={liClassName}>
      <button type="reset" className={btnClassName} />
      <a className="underline" href={href}>
        {message}
      </a>
    </li>
  );
};

export default CheckList;
