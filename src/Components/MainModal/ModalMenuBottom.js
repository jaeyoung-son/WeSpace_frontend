import React, { Component } from "react";
import "./ModalMenuBottom.scss";
import "./Modal.scss";
import ModalServiceInfo from "./ModalServiceInfo";
import { Link } from "react-router-dom";
class ModalMenuBottom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      id: props.id
    };
  }

  handleClick = () => {
    if (this.state.id === this.props.length) {
      this.setState({
        clicked: !this.state.clicked
      });
    }
  };
  render() {
    console.log(this.state.id, this.props.length, this.state.clicked);
    const listSquare = {
      listStyle: "square"
    };
    const toggle = () => {
      if (this.state.clicked) {
        const open = {
          backgroundPosition: "-268px -232px",
          width: "18px",
          height: "10px"
        };
        return open;
      } else if (!this.state.clicked && this.state.id === 5) {
        const open = {
          backgroundPosition: "-246px -232px",
          width: "18px",
          height: "10px"
        };
        return open;
      }
    };
    return (
      <li>
        <Link to="/" className="bottom_menu_item" onClick={this.handleClick}>
          {this.props.MenuName}
          <span className="bottom_menu_icon" style={toggle()}></span>
        </Link>
        {this.state.clicked ? (
          <ul style={listSquare}>
            <ModalServiceInfo />
          </ul>
        ) : (
          <div></div>
        )}
      </li>
    );
  }
}

export default ModalMenuBottom;
