import React, { Component } from "react";
import "./MainNavbar.scss";
import { Link } from "react-router-dom";
import logoImage from "../Images/WeLogo.png";

class MainNavbar extends Component {
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
          <Link className="nav_link">기획전</Link>
          <Link className="nav_link">공간 등록하기</Link>
          <Link className="menu_link">
            <div className="header_menu_img"></div>
          </Link>
        </div>
      </header>
    );
  }
}
export default MainNavbar;
