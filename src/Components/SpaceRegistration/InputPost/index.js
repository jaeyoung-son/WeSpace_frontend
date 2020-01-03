/*global daum*/
import React, { Component } from "react";
import axios from "axios";

class InputPost extends Component {
  state = { api: "" };
  handleChange = e => {
    this.props.handleValue(e.target.name, e.target.value);
  };

  handleClick() {
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
    document.head.appendChild(script);

    script.onload = () => {};
  }
  render() {
    console.log(this.state.api);
    return (
      <div className="input_item">
        <div className="input_title">주소입력</div>
        <input
          type="text"
          className="registration_input_text"
          placeholder="주소입력"
          onChange={this.handleChange}
          name="address"
        ></input>
        <button onClick={this.handleClick}>주소찾기</button>
      </div>
    );
  }
}

export default InputPost;
