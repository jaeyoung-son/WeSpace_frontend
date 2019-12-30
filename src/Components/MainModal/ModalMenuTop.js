import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ModalMenuTop.scss";

class ModalMenuTop extends Component {
  render() {
    return (
      <div className="modal_menu_wrap">
        <li>
          <Link to="/">
            <div className="modal_reservationlist"></div>
            <span>예약리스트</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <div className="modal_manage"></div>
            <span>이용후기</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <div className="modal_zzim"></div>
            <span>찜한공간</span>
          </Link>
        </li>
      </div>
    );
  }
}

export default ModalMenuTop;
