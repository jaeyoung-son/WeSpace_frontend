import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ReViewZoneArticle.scss";
import ReViewZoneTag from "./ReViewZoneTag";
import ReViewZoneStar from "./ReViewZoneStar";

class ReViewZoneArticle extends Component {
  render() {
    return (
      <Link to="/">
        <div className="review_pohto_wrap">
          <img
            src="https://moplqfgeemqv2103108.cdn.ntruss.com/service/157735301_190f5de631c596ff1428fe2fee5fb6a7.jpeg?type=m&w=900&h=900&autorotate=true&quality=90"
            alt="공간이미지"
          ></img>
          <div className="space_content">
            <ReViewZoneTag />
            <ReViewZoneTag />
            <div className="space_title">강남역 파티일주 파티룸</div>
            <div className="space_price">
              <span>40,000</span>
              <span>원/시간</span>
            </div>
            <ReViewZoneStar />
          </div>
        </div>
      </Link>
    );
  }
}

export default ReViewZoneArticle;
