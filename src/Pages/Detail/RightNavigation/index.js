import React, { Component } from "react";
import { API_YERIN_URL, LOGIN_TOKEN } from "../../../config";
import "./RightNavigation.scss";
import fetchData from "../../../Utils/fetch";
import DetailList from "../DetailList";
import FacilityImg from "../FacilityImg";
import Calendar from "react-calendar";
import ScrollContainer from "react-indiana-drag-scroll";
import { withRouter } from "react-router-dom";
import { handleNumber } from "../../../Utils/handleNumber";
import TimeBox from "../TimeBox";

class RightNavigation extends Component {
  state = {
    spaceData: {},
    radioChecked: true,
    date: new Date(),
    sendDate: {
      year: "",
      month: "",
      senddate: ""
    },
    checkPeople: "",
    reserveTime: [],
    realSpaceData: {}
  };

  toRender = data => {
    if (data) {
      this.setState({
        reserveTime: data
      });
    }
  };

  goToLogin = () => {
    this.props.history.push("/login");
  };

  goToMain = () => {
    this.props.history.push("/");
  };

  onSubmit = () => {
    const { reserveTime } = this.state;
    const { year, month, senddate } = this.state.sendDate;
    const token = localStorage.getItem(LOGIN_TOKEN);
    // console.log("token", token);
    if (!token) {
      alert("로그인해주세요");
      this.goToLogin();
      return;
    }
    // console.log(sessionStorage.getItem(LOGIN_TOKEN));
    fetch(`${API_YERIN_URL}/space/reservation`, {
      method: "POST",
      headers: {
        Authorization: token
      },
      body: JSON.stringify(
        {
          host_id: this.state.realSpaceData.result[0].host[0].id,
          space_id: this.state.realSpaceData.result[0].id,
          year: year,
          month: month,
          day: senddate,
          hour: reserveTime.sort()
        },
        console.log(year, month, senddate)
      )
    })
      .then(res => {
        alert(`${year} ${month} ${senddate} ${reserveTime}시 예약 되었습니다.`);
      })
      .catch(err => {
        console.log(err);
      });
    this.goToMain();
  };

  dayChange = date => {
    this.setState(
      {
        date
      },
      () => {
        this.setState({
          sendDate: {
            year: this.state.date.getFullYear(),
            month: this.state.date.getMonth() + 1,
            senddate: this.state.date.getDate()
          }
        });
      }
    );
  };

  calcNum = e => {
    if (e.target.outerText === "+") {
      this.setState({
        checkPeople: parseInt(this.state.checkPeople) + 1
      });
    } else if (this.state.checkPeople > 5) {
      this.setState({
        checkPeople: this.state.checkPeople - 1
      });
    }
  };

  handleBtn = () => {
    this.setState({
      radioChecked: !this.state.radioChecked
    });
  };

  componentDidMount() {
    fetchData("http://localhost:3000/Data/Data.json").then(data => {
      this.setState({
        spaceData: data.spaceData,
        checkPeople: data.spaceData.minPeople
      });
    });
    fetchData(`http://10.58.7.97:8000/space/${this.props.link}`).then(res => {
      this.setState({
        realSpaceData: res
      });
    });
  }
  render() {
    if (!this.state.realSpaceData.result) return <></>;
    const spaceData = this.state;
    const { radioChecked, date, reserveTime, realSpaceData } = this.state;
    const { price, title, space_images } = realSpaceData.result[0];
    const { dayChange, handleBtn, toRender, onSubmit } = this;
    const {
      spaceType,
      spacePrice,
      spaceContext,
      type,
      time,
      people,
      reserve
    } = spaceData.spaceData;
    const { year, month, senddate } = this.state.sendDate;
    if (!spacePrice) return <></>;
    return (
      <>
        <div className="right_fixed">
          <div className="right_heading">
            <span>세부공간 선택</span>
            <div className="social_img">
              <div className="social_share"></div>
              <div className="like_btn"></div>
            </div>
          </div>
          <div className="respond_info">
            <p>
              호스트의 승인을 기다릴 필요 없이<br></br> 지금 바로 예약하세요!
            </p>
          </div>
          <div className="reserve_list">
            <div className="check_money">
              <div className="check_left">
                <div className="radio_btn"></div>
                <span className="check_space">{spaceType}</span>
              </div>
              <div>
                <span className="reserve_left">₩{parseInt(price)}</span>
                <span className="reserve_right">/시간</span>
              </div>
            </div>
            <div className="space_info">
              <div className="info_top">
                {/* <div className="info_img"></div> */}
                <img className="info_img" src={space_images[0]} alt="." />
                <p>{spaceContext}</p>
              </div>
              <ul className="list_detail">
                <DetailList leftText="공간유형" rightText={type} />
                <DetailList leftText="예약시간" rightText={time} />
                <DetailList leftText="예약인원" rightText={people} />
              </ul>
              <div className="facility">
                <ul>
                  <FacilityImg />
                </ul>
                <div className="fixed_bot">예약선택</div>
                <div className="reserve_select">
                  <div className="radio_btn" onClick={handleBtn}></div>
                  <div
                    onClick={this.handleBtn}
                    className={radioChecked ? "" : "radio_btn_checked"}
                  ></div>
                  <span>
                    {reserve}({time})
                  </span>
                </div>
              </div>
              <div className={radioChecked ? "hide" : "day_header"}>
                <span>날짜 선택 </span>
                <span className="ymd">
                  {year}년{month}월{senddate}일
                </span>
              </div>
              <Calendar
                className={radioChecked ? "hide" : "calendar"}
                onChange={dayChange}
                value={date}
              />
              <div className={radioChecked ? "hide" : "day_header"}>
                <span>시간 선택 </span>
                <span className="select_time">{reserveTime.length} 시간</span>
              </div>
              <ScrollContainer className="scroll">
                <div className={radioChecked ? "hide" : "time_container"}>
                  <ul className="time_list">
                    <li className="time_slicebox">
                      <div className="time_box">
                        <div className="first_time_slice">0</div>
                        <div className="first_time_price"></div>
                      </div>
                      <TimeBox price={parseInt(price)} toRender={toRender} />
                    </li>
                  </ul>
                </div>
              </ScrollContainer>
              <div className={radioChecked ? "hide" : "day_header"}>
                <span>예약 인원</span>
              </div>
              <div className={radioChecked ? "hide" : "day_footer"}>
                <div className="plus_btn" onClick={this.calcNum}>
                  -
                </div>
                <span className="count_num">{this.state.checkPeople}</span>
                <div className="minus_btn" onClick={this.calcNum}>
                  +
                </div>
              </div>
              <div className={radioChecked ? "hide" : "total_price"}>
                <span>공간사용료</span>
              </div>
              <div className={radioChecked ? "hide" : "price_print"}>
                ₩{handleNumber(price) * reserveTime.length}
              </div>
            </div>
            <div className="bot_btn">
              <a className="call_btn" href="#pop3">
                <span>
                  <div></div>
                  전화
                </span>
              </a>
              <a className="reserve_btn" href="#pop4">
                <div></div>
                <span onClick={onSubmit}>예약신청하기</span>
              </a>
            </div>
          </div>
          <div className="right_banner">
            <img
              src="https://kr.object.ncloudstorage.com/scloud-service/service/157510291_1388a4f96c641c20bf6db298cba3e4d8.png"
              alt="배너"
            />
          </div>
        </div>
        <div className="right_pop" id="pop3">
          <p>
            "위스페이스를 통해 연락드렸어요~"<br></br> 라고 말씀하시면 더
            친절하게 안내 받으실 수 있습니다. :)
          </p>
          <div className="call_info">
            {title}
            <br></br>
            <span>{realSpaceData.result[0].host[0].phonenumber}</span>
          </div>
          <div className="call_btn">
            <a href="#c">확인</a>
          </div>
        </div>
        <a href="#c" className="detail_dim">
          .
        </a>
      </>
    );
  }
}

export default withRouter(RightNavigation);
