import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import SmallFooter from "./SmallFooter";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer_wrap">
          <div className="top_area">
            <Link className="footer_logo icon"></Link>
            <ul className="footer_top_area_menu">
              <li>블로그</li>
              <li>이용약관</li>
              <li>개인정보처리방침</li>
              <li>운영정책</li>
              <li>고객문의</li>
            </ul>
          </div>
          <div className="bottom_area">
            <ul className="company_info">
              <li>상호명:재영그룹</li>
              <li>대표자:손재영</li>
              <li>사업자등록번호 : 1111-11-1111</li>
              <li>통신판매업신고번호: 2018-서울강남-1111</li>
              <li className="business_info">
                <Link>사업자등록정보</Link>
              </li>
              <li className="company_location">
                영업소재지: 서울특별시 강남구 선릉로 123
              </li>
              <li>이메일: 123@spacecloud.kr</li>
              <li className="company_phonenumber">
                대표전화: 1234-1234(평일 오후 2시 ~ 오후 6시)
              </li>
              <li className="online_inquiry">
                <Link>온라인 1:1 문의 바로가기</Link>(평일 오전 10시 ~ 오후 6시)
                * 공간에 대한 문의사항은 해당 공간 호스트에게 직접 문의해주세요.
              </li>
            </ul>
            <div className="sns_list">
              <Link className="icon icon_blog"></Link>
              <Link className="icon icon_post"></Link>
              <Link className="icon icon_facebook"></Link>
              <Link className="icon icon_tweeter"></Link>
              <Link className="icon icon_instagram"></Link>
            </div>
          </div>
          <div className="company_caption">
            <div>
              위스페이스클라우드는 통신판매중개자이며 통신판매의 당사자가
              아닙니다. 따라서 위스페이스클라우드는 공간 거래정보 및 거래에 대해
              책임지지 않습니다.
            </div>
            <div>Copyright NSPACE Corp. All Rights Reserved.</div>
          </div>
        </div>
        <SmallFooter />
      </footer>
    );
  }
}

export default Footer;
