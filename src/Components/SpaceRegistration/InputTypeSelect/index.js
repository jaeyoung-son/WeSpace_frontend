import React, { Component } from "react";
import "./RegistrationInputSelect.scss";

class RegistrationInputSelect extends Component {
  state = {};
  handleClick = e => {
    console.log(e.target.name);
    this.props.handleValue(e.target.name, e.target.value);
  };
  createItem = () => {
    const result = [];
    for (let i = 0; i < 24; i++) {
      result.push(<option value={i}>{`${i}시`}</option>);
    }
    return result;
  };
  render() {
    return (
      <>
        <div className="input_item">
          <div className="input_title">운영시간</div>
        </div>
        <select className="input_select" name="open" onClick={this.handleClick}>
          {this.createItem()}
        </select>
        <span className="from_what_time">부터</span>
        <select
          className="input_select"
          name="close"
          onClick={this.handleClick}
        >
          {this.createItem()}
        </select>
      </>
    );
  }
}

export default RegistrationInputSelect;
