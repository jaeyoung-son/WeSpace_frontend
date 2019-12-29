import React, { Component } from "react";
import { checkMail, checkPw } from "../../Utils/CheckValidation";
import "./InputForm.scss";

class LoginForm extends Component {
  state = {
    idInput: "",
    pwInput: "",
    boxMemory: true,
    boxClass: ""
  };

  goToMain = () => {
    this.props.history.push("/");
  };

  handleSubmit = e => {
    e.preventDefault();
    const { idInput, pwInput } = this.state;
    if (checkMail(idInput) && checkPw(pwInput)) {
      fetch("http://10.58.7.97:8000/account/auth", {
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
      this.goToMain();
    }
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
              idInput.length > 0
                ? checkMail(idInput)
                  ? "list"
                  : "err"
                : "list"
            }
          >
            <input
              onChange={handleIdChange}
              className="login_input"
              value={idInput}
              type="text"
              placeholder="이메일"
            />
            <p className="errMessage">이메일 형식이 유효하지 않습니다.</p>
          </li>
          <li
            className={
              pwInput.length > 0 ? (checkPw(pwInput) ? "list" : "err") : "list"
            }
          >
            <input
              onChange={handlePwChange}
              className="login_input"
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
