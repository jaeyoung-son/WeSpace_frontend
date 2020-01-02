import React, { Component } from "react";
import "./SmallFooter.scss";
import { Link } from "react-router-dom";

class Footer2 extends Component {
  state = {
    clicked: false
  };
  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    });
  };
  render() {
    return (
      <div className="responsive_footer_wrap">
        <div className="footer_logo"></div>
        <div className="info_wrap">
          <div className="footer_company_info" onClick={this.handleClick}>
            (주)재영그룹 사업자정보 및 통신판매업자 신원정보
            <span
              className={`footer_arrow ${
                this.state.clicked ? "arrow_up" : "arrow_down"
              }`}
            ></span>
          </div>
        </div>
        <div className={this.state.clicked ? "info_text" : "hide"}>
          <ul>
            <li>상호명: 주식회사 앤스페이스 </li>
            <li>대표: 재영</li>
            <li>사업자등록번호: 111-11-11111 </li>
            <li>통신판매업신고번호: 2018-서울강남-12345 </li>
            <li>사업자등록정보 영업소재지: 서울특별시 강남구 꽃길로 </li>
            <li>이메일: 1234@spacecloud.kr </li>
            <li>대표전화: 1599-1234(평일 오후 2시 ~ 오후 6시) </li>
            <li className="online">온라인 1:1 문의 바로가기</li>
            <span>(평일 오전 10시 ~ 오후 6시)</span>
            <li>
              * 공간에 대한 문의사항은 해당 공간 호스트에게 직접 문의해주세요.
            </li>
          </ul>
        </div>
        <div className="sns_wrap">
          <div className="sns_list">
            <Link className="icon icon_blog"></Link>
            <Link className="icon icon_post"></Link>
            <Link className="icon icon_facebook"></Link>
            <Link className="icon icon_tweeter"></Link>
            <Link className="icon icon_instagram"></Link>
          </div>
        </div>
        <ul className="bar_list">
          <li className="first">이용약관</li>
          <li>개인정보처리방침</li>
          <li>운영정책</li>
        </ul>
        <div>ⓒNSPACE Corp.</div>
      </div>
    );
  }
}
export default Footer2;
