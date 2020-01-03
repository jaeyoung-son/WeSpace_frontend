import React, { Component } from "react";

class CheckListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      style: { backgroundColor: "white" },
      style2: { backgroundPosition: "-519px -486px" },
      clicked: false
    };
  }
  handleClick = e => {
    if (this.props.list.length < 5) {
    }
    this.props.handleList(this.props.id, "list");
    this.setState({
      clicked: !this.state.clicked
    });
    if (!this.state.clicked) {
      this.setState({
        style: { backgroundColor: "#704DE4", color: "white" },
        style2: { backgroundPosition: "-543px -486px" }
      });
    } else {
      this.setState({
        style: { backgroundColor: "white", color: "black" },
        style2: { backgroundPosition: "-519px -486px" }
      });
    }
  };
  render() {
    return (
      <li
        className="list_item"
        onClick={this.handleClick}
        style={this.state.style}
      >
        <div>{this.state.value.name}</div>
        <span className="list_icon" style={this.state.style2}></span>
      </li>
    );
  }
}

export default CheckListItem;
