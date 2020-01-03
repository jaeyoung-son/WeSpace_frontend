import React, { Component } from "react";
import "./MainGnb.scss";
import Modal from "./MainModal/Modal";
import { Link } from "react-router-dom";
import logoImage from "../Images/WeLogo.png";

class MainGnb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
  }

  openedClosedModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  // closeModal = () => {
  //   this.setState({ isModalOpen: false });
  // };

  render() {
    return (
      <header className="header">
        <Link to="/" className="logo">
          <img src={logoImage} alt="mainLogo"></img>
        </Link>
        <div className="header_input">
          <div className="header_input_wrap">
            <input placeholder="지역 또는 공간유형을 검색해보세요!"></input>
            <div className="input_search"></div>
          </div>
        </div>
        <div className="header_nav">
          <Link to="/" className="nav_link">
            기획전
          </Link>
          <Link to="/Registration" className="nav_link">
            공간 등록하기
          </Link>
          <div className="menu_link" onClick={this.openedClosedModal}>
            <div className="header_menu_img"></div>
          </div>
        </div>
        <Modal isOpen={this.state.isModalOpen} close={this.openedClosedModal} />
      </header>
    );
  }
}
export default MainGnb;
