import React, { Component } from "react";
import ReViewZoneArticle from "./ReViewZoneArticle";
import "./ReViewZone.scss";

class ReViewZone extends Component {
  render() {
    return (
      <>
        <div className="review_zone_wrap">
          <div className="main_sub_title">
            리뷰ZONE
            <div className="zone_title_content">
              이용자들의 생생한 후기를 만나보세요
            </div>
          </div>
          <div className="review_article_wrap">
            <ReViewZoneArticle />
            <ReViewZoneArticle />
            <ReViewZoneArticle />
            <ReViewZoneArticle />
            <ReViewZoneArticle />
          </div>
        </div>
      </>
    );
  }
}

export default ReViewZone;
