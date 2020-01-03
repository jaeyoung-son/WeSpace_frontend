import React from "react";
import Option from "../Option";
import "./SpaceRegistrationSubTitle.scss";

const SpaceRegistrationSubTitle = ({ subtitle, option }) => {
  return (
    <div className="subtitle">
      <h3>
        {subtitle}
        {option ? (
          <Option option={option} classname="option_necessary" />
        ) : null}
      </h3>
    </div>
  );
};

export default SpaceRegistrationSubTitle;
