import React from "react";
import "./SignupInput.scss";

const SignupInput = ({
  name,
  value,
  type,
  placeholder,
  message,
  handleChange
}) => {
  return (
    <>
      <input
        className="signup_input"
        name={name}
        onChange={handleChange}
        value={value}
        type={type}
        placeholder={placeholder}
      />
      <p className="signup_err_message">{message}</p>
    </>
  );
};

export default SignupInput;
