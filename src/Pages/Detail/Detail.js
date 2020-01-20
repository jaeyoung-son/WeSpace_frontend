import React, { Component } from "react";
import MainGnB from "../../Components/Gnb";
import RightNavigation from "./RightNavigation";
import fetchData from "../../Utils/fetch";
import HeadingTag from "./HeadingTag";
import KaKaoMap from "../../Components/KaKaoMap";
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
    reserveWarning: [],
    realSpaceData: {}
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
    const link = this.props.match.params.name;
    fetchData(`http://10.58.7.97:8000/space/${link}`).then(res => {
      this.setState({
        realSpaceData: res
      });
    });
  }

  render() {
    if (this.state.realSpaceData.result === undefined) return <></>;
    // const {
    //   title,
    //   short_intro,
    //   long_intro,
    //   location,
    //   open_time,
    //   close_time,
    //   tag,
    //   notice
    // } = this.state.realSpaceData.result[0];
    // const { reserveList, spaceData } = this.state;
    // const { holiday, hostImg } = spaceData;
    const { reserveList, spaceData, realSpaceData } = this.state;
    const {
      title,
      short_intro,
      long_intro,
      location,
      open_time,
      close_time,
      tag,
      notice,
      host
    } = realSpaceData.result[0];
    const { holiday, hostImg } = spaceData;

    const tagList = tag.map((el, index) => (
      <HeadingTag key={index} tagList={el} />
    ));

    const spaceInfoList = reserveList.map((el, index) => (
      <InfoList text={el} key={index} index={index + 1} />
    ));

    const warningList = notice.map((el, index) => (
      <InfoList text={el} key={index} index={index + 1} />
    ));

    return (
      <>
        <MainGnB />
        <div className="whole_container">
          <div className="inner_width">
            <div className="main_heading">
              <p className="space_name">{title}</p>
              <p className="sub_desc">{short_intro}</p>
              <div className="header_tags">{tagList}</div>
            </div>

            <div className="detail_form">
              <RightNavigation />
              <ImgSlide />
              <div className="detail_inf">
                <p className="detail_main">{short_intro}</p>
                <p className="h_intro h_top">공간 소개</p>
                <p className="intro_message">{long_intro}</p>
                <p className="info_time">
                  영업시간
                  <span>
                    {open_time}~{close_time}시
                  </span>
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
                      결제 후 2시간 이내에는 100% 환불이 가능합니다.(단,
                      이용시간 전까지만 가능)
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
                  <p className="pr_name">{title}</p>
                  <p className="pr_adr">{location}</p>
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
              <div className="space_map">
                <KaKaoMap width="100%" address={location} />
              </div>
              <QnAList />
              <div className="profile_inner">
                <div className="host_top">
                  <div className="host_inner">
                    <img src={hostImg} alt="."></img>
                    <p className="host_h">HOST</p>
                    <p>{host[0].nick_name}</p>
                    <div>호스트 페이지로 이동-></div>
                  </div>
                </div>
              </div>
              <div className="h_intro">호스트의 다른공간</div>
              <div className="space_other">
                호스트의 다른 공간이 아직 없습니다.
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Detail;
