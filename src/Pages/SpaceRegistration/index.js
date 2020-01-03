import React from "react";
import "../../Styles/SpaceRegistration.scss";
import SpaceRegistrationGnb from "../../Components/SpaceRegistration/SpaceRegistrationGnb";
import RegistrationForm from "../../Components/SpaceRegistration/Form";

const SpaceRegistration = () => {
  return (
    <div className="space">
      <SpaceRegistrationGnb />
      <RegistrationForm />
    </div>
  );
};
export default SpaceRegistration;
