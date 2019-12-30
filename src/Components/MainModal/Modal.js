/* eslint-disable */
import React from "react";
import ReactTransitionGroup from "react-addons-css-transition-group";
import { Link } from "react-router-dom";
import "./Modal.scss";
import ModalMenuTop from "./ModalMenuTop";
import ModalMenuBottom from "./ModalMenuBottom";

const Menu = ["스페이스 클라우드 홈", "써 본 사람", "공지사항", "1:1문의사항", "도움말", "서비스정보"];
const Modal = ({ isOpen, close }) => {
  return (
    <>
      {isOpen ? (
        <ReactTransitionGroup transitionName={"modal_anim"} transitionEnterTimeout={2000} transitionLeaveTimeout={2000}>
          <div className="modal_overlay" onClick={close} />
          <div className="modal">
            <div className="modal_profile">
              <div className="back_color_outer">
                <div className="back_color_inner"></div>
              </div>
              <div className="profile_background">
                <Link to="/login">
                  <img
                    src="https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAxNzA1MDVfMTUg%2FMDAxNDkzOTkyNTE3MzMx.TLndmPAeo2QEbL80n4_2QWZ1YxSIHlbl8DcrGm3qzmcg.Bth95vXz1mbs68KafvpLUQKzCqTKQEyD70ZhcyWgo1Ig.JPEG.dnalstjq126%2F%25BD%25C7%25BB%25E7%25BF%25CE%25B1%25BB.jpg&type=b400"
                    alt="프로필사진"
                  ></img>
                </Link>
                {/* <div className="modal_profile_text">
                  <div className="modal_profile_name">아니 저게</div>
                  <div className="profile_edit">프로필 관리</div>
                </div> */}
                <Link to="/login">
                  <div>로그인이필요합니다</div>
                </Link>
              </div>
              <div className="button_wrap">
                <div className="button_image" onClick={close}></div>
              </div>
            </div>
            <div className="modal_scroll">
              <ul className="modal_menu_top">
                <ModalMenuTop />
              </ul>
              <Link to="/">
                <div className="modal_monthplanning">
                  <div>이 달의 기획전</div>
                </div>
              </Link>
              <ul className="modal_menu_bottom">
                {Menu.map((currMenu, i, arr) => {
                  const length = arr.length - 1;
                  if (length === i) {
                    return <ModalMenuBottom MenuName={currMenu} key={i} length={length} id={i} />;
                  }
                  return <ModalMenuBottom MenuName={currMenu} key={i} id={i} />;
                })}
              </ul>
              <div className="modal_logout">
                <Link to="/">로그아웃</Link>
                <p>Powered by © NSPACE Corp.</p>
              </div>
            </div>
            <div className="modal_host">
              <Link to="/">
                호스트센터로 이동
                <div className="host_icon"></div>
              </Link>
            </div>
          </div>
        </ReactTransitionGroup>
      ) : (
        <ReactTransitionGroup transitionName={"modal_anim"} transitionEnterTimeout={200} transitionLeaveTimeout={1000} />
      )}
    </>
  );
};

export default Modal;
