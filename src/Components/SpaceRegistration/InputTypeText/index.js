import React, { Component } from "react";
import "./RegistrationInputText.scss";

class RegistrationInputText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  handleChange = e => {
    this.setState(
      {
        value: e.target.value
      },
      () => {
        this.props.handleValue(this.props.name, this.state.value);
      }
    );
  };
  render() {
    return (
      <>
        <div className="input_item">
          <div className="input_title">
            {this.props.title}
            <div className="word_counter">
              {typeof this.props.info.limitedWord === "number"
                ? `${this.state.value.length}/${this.props.info.limitedWord}`
                : this.props.info.limitedWord}
            </div>
          </div>
          <input
            type={this.props.info.type}
            className="registration_input_text"
            placeholder=""
            onChange={this.handleChange}
            maxLength={this.props.info.limitedWord}
            value={this.state.value}
          ></input>
        </div>
      </>
    );
  }
}

export default RegistrationInputText;
