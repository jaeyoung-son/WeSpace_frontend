import React from "react";
import "../Login/Login.scss";
import SocialLogin from "../../Components/SocialLogin";
import SignupForm from "./SignupForm";

const Signup = () => {
  return (
    <div className="main_container">
      <p className="header_text">회원가입</p>
      <div className="login_inner">
        <div className="white_box">
          <SocialLogin name="시작하기" />
          <SignupForm />
        </div>
      </div>
    </div>
  );
};

export default Signup;
