import React, { Component } from "react";
import "./SpaceRegistrationGnb.scss";
import { Link } from "react-router-dom";
import Modal from "../../MainModal/Modal";

class SpaceRegistrationGnb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
  }
  openedClosedModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };
  render() {
    return (
      <header className="space_nav">
        <Link className="space_nav_prev">
          <span className="space_nav_a_icon_prev"></span>
        </Link>
        <div className="space_nav_div">
          <h2>공간 유형 선택</h2>
        </div>
        <div onClick={this.openedClosedModal} className="space_nav_menu">
          <span className="space_nav_a_icon_menu"></span>
        </div>
        <Modal isOpen={this.state.isModalOpen} close={this.openedClosedModal} />
      </header>
    );
  }
}

export default SpaceRegistrationGnb;
