import React, { Component } from "react";
import RightNavigation from "./RightNavigation";
import fetchData from "../../Utils/fetch";
import HeadingTag from "./HeadingTag";
import QnAList from "./QnAList";
import ImgSlide from "../Detail/ImgSlide/ImgSlide";
import InfoList from "./InfoList";
import RefundList from "./RefundList";
import "./Detail.scss";
import "../../Styles/Common.scss";

class Detail extends Component {
  state = {
    spaceData: {},
    topTag: [],
    reserveList: [],
    reserveWarning: []
  };

  componentDidMount() {
    fetchData("http://localhost:3000/data/data.json").then(res => {
      this.setState({
        spaceData: res.spaceData,
        topTag: res.spaceData.topTag,
        reserveList: res.spaceData.spaceInfo,
        reserveWarning: res.spaceData.reserveWarning
      });
    });
  }

  render() {
    const {
      name,
      address,
      subTitle,
      introMessage,
      setTime,
      holiday,
      hostImg
    } = this.state.spaceData;
    const { topTag, reserveList, reserveWarning } = this.state;

    const tagList = topTag.map((el, index) => (
      <HeadingTag key={index} tagList={el} />
    ));

    const spaceInfoList = reserveList.map((el, index) => (
      <InfoList text={el} key={index} index={index + 1} />
    ));

    const warningList = reserveWarning.map((el, index) => (
      <InfoList text={el} key={index} index={index + 1} />
    ));

    return (
      <div className="whole_container">
        <div className="inner_width">
          <div className="main_heading">
            <p className="space_name">{name}</p>
            <p className="sub_desc">{subTitle}</p>
            <div className="header_tags">{tagList}</div>
          </div>
          <div className="detail_form">
            <ImgSlide />
            <div className="detail_inf">
              <p className="detail_main">{subTitle}</p>
              <p className="h_intro h_top">공간 소개</p>
              <p className="intro_message">{introMessage}</p>
              <p className="info_time">
                영업시간
                <span>{setTime}</span>
              </p>
              <p className="info_day">
                휴무일
                <span>{holiday}</span>
              </p>
              <div className="text_box">
                <p className="h_intro">시설 안내</p>
                <div>{spaceInfoList}</div>
                <p className="h_intro">예약시 주의사항</p>
                <div>{warningList}</div>
                <p className="h_intro">환불규정 안내</p>
                <div className="refund_text">
                  <p className="refund_red">
                    이용당일(첫 날) 이후에 환불 관련 사항은 호스트에게 직접
                    문의하셔야 합니다.
                  </p>
                  <p>
                    결제 후 2시간 이내에는 100% 환불이 가능합니다.(단, 이용시간
                    전까지만 가능)
                  </p>
                </div>
                <div>
                  <RefundList day="이용 8일전" money="총 금액의 100% 환불" />
                  <RefundList day="이용 7일전" money="총 금액의 30% 환불" />
                  <RefundList day="이용 6일전" money="총 금액의 30% 환불" />
                  <RefundList day="이용 5일전" money="총 금액의 30% 환불" />
                  <RefundList day="이용 4일전" money="총 금액의 30% 환불" />
                  <RefundList day="이용 3일전" money="총 금액의 30% 환불" />
                  <RefundList day="이용 2일전" money="환불 불가" />
                  <p className="info_list refund_day">
                    이용 전날
                    <span className="refund_per margin_plus">환불 불가</span>
                  </p>
                  <p className="info_list refund_day">
                    이용 당일
                    <span className="refund_per margin_plus">환불 불가</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="host_profile">
              <div className="profile_inner">
                <p className="pr_name">{name}</p>
                <p className="pr_adr">{address}</p>
                <div className="bot_btn">
                  <a href="#pop3">
                    전화걸기<i className="call_img"></i>
                  </a>
                  <a
                    href="http://map.daum.net/link/to/OFFDAY STUDIO,35.15284956,129.06816991"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    길찾기<i className="road_img"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="space_map">지도</div>
            <QnAList />
            <div className="profile_inner">
              <div className="host_top">
                <div className="host_inner">
                  <img src={hostImg} alt="."></img>
                  <p className="host_h">HOST</p>
                  <p>호스트</p>
                  <div>호스트 페이지로 이동-></div>
                </div>
              </div>
            </div>
            <div className="h_intro">호스트의 다른공간</div>
            <div className="space_other">
              호스트의 다른 공간이 아직 없습니다.
            </div>
            <RightNavigation />
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
