import React from "react";
import "./SocialLogin.scss";

const SocialLogin = ({ name }) => {
  return (
    <>
      <div className="login_btn">
        <a href="/login" className="naver">
          네이버로 {name}
        </a>
        <a href="/login" className="kakao">
          카카오로 {name}
        </a>
      </div>
      <p className="or">
        <span>또는</span>
      </p>
    </>
  );
};

export default SocialLogin;
