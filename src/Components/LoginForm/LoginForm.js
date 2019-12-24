import React, { Component } from "react";
import "./LoginForm.scss";

class LoginForm extends Component {
  state = {
    idInput: "",
    pwInput: "",
    boxMemory: true,
    boxClass: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    const { idInput, pwInput } = this.state;
    console.log(idInput, pwInput);
    fetch("url", {
      method: "POST",
      body: JSON.stringify({
        email: idInput,
        password: pwInput
      })
    })
      .then(res => res.json())
      .then(res => {
        sessionStorage.setItem("login_token", res.access_token);
      });
  };

  handleBoxState = () => {
    this.setState({
      boxMemory: !this.state.boxMemory
    });
  };

  handleIdChange = e => {
    const { value } = e.target;
    this.setState({
      idInput: value
    });
  };

  handlePwChange = e => {
    const { value } = e.target;
    this.setState({
      pwInput: value
    });
  };

  checkId = mail => {
    const mailtest = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    return mailtest.test(mail);
  };

  checkPw = pw => {
    const pwtest = /^[A-Za-z0-9]{6,40}$/;
    return pwtest.test(pw);
  };

  render() {
    const { idInput, pwInput, boxMemory } = this.state;
    const {
      handleIdChange,
      handlePwChange,
      handleBoxState,
      handleSubmit
    } = this;
    return (
      <form>
        <ul>
          <li
            className={
              this.state.idInput.length > 0
                ? this.checkId(this.state.idInput)
                  ? ""
                  : "err"
                : ""
            }
          >
            <input
              onChange={handleIdChange}
              value={idInput}
              type="text"
              placeholder="이메일"
            />
            <p className="errMessage">이메일 형식이 유효하지 않습니다.</p>
          </li>
          <li
            className={
              this.state.pwInput.length > 0
                ? this.checkPw(this.state.pwInput)
                  ? ""
                  : "err"
                : ""
            }
          >
            <input
              onChange={handlePwChange}
              value={pwInput}
              type="password"
              placeholder="비밀번호"
            />
            <p className="errMessage">비밀번호가 너무 짧습니다.</p>
          </li>
        </ul>
        <div className="memory_box">
          <div className="check_box" onClick={handleBoxState}>
            <button
              type="reset"
              className={boxMemory ? "" : "checked"}
            ></button>
            <span>로그인 기억하기</span>
          </div>
          <span>비밀번호 찾기</span>
        </div>
        <button onClick={handleSubmit} className="submit" type="submit">
          이메일로 로그인
        </button>
      </form>
    );
  }
}

export default LoginForm;
