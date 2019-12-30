import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ModalServiceInfo.scss";

class ModalServiceInfo extends Component {
  render() {
    return (
      <>
        <li>
          <Link to="/" className="service_info_item">
            서비스소개
          </Link>
        </li>
        <li>
          <Link to="/" className="service_info_item">
            이용약관
          </Link>
        </li>
        <li>
          <Link to="/" className="service_info_item">
            개인정보처리방침
          </Link>
        </li>
        <li>
          <Link to="/" className="service_info_item">
            운영정책
          </Link>
        </li>
      </>
    );
  }
}

export default ModalServiceInfo;
