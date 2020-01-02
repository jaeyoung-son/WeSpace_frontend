import React, { Component } from "react";
import "./ReViewZoneStar.scss";

class ReViewZoneStar extends Component {
  render() {
    return (
      <div className="space_review_area">
        <div className="review_rate">
          <span className="full_star"></span>
          <span className="full_star"></span>
          <span className="full_star"></span>
          <span className="full_star"></span>
          <span className="empty_star"></span>
        </div>
        <div className="space_text">
          오늘 여기와서 너무 좋았어요 짱짱맨 다음에도 여기와서 파티하고 싶네요
          연말에 즐겁게 보내고 갑니다.
        </div>
      </div>
    );
  }
}

export default ReViewZoneStar;
