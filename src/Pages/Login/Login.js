import React from "react";
import "./Login.scss";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import LoginForm from "../../Components/LoginForm/LoginForm";

const Login = () => {
  return (
    <div className="main_container">
      <p className="header_text">로그인</p>
      <div className="login_inner">
        <div className="white_box">
          <SocialLogin name="로그인" />
          <LoginForm />
          <p className="no_member">
            아직 스페이스 클라우드 회원이 아니신가요?
            <a href="/Signup">회원 가입</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
