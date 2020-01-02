import React, { Component } from "react";
import "./InnerSlideArticle.scss";

class InnerSlideArticle extends Component {
  render() {
    return (
      <div className="inner_slide_article">
        <h3 className="inner_article_title">OFFDAY STUDIO</h3>
        <div className="inner_article_tag">
          <div className="tag_image"></div>
          <div className="tag_title">서면</div>
          <div className="tag_hash">#부산스튜디오 #전포동스튜디오 #전포동스튜디오 #전포동스튜디오 #전포동스튜디오</div>
        </div>
        <div className="inner_slide_price">
          <div className="price">30,000</div>
          <div className="time_price">원/시간</div>
          <div className="inner_price_naver"></div>
          <div className="inner_reply_wrap">
            <span className="inner_reply"></span>
            <span>0</span>
          </div>
          <div className="inner_like_wrap">
            <span className="inner_like"></span>
            <span>2</span>
          </div>
        </div>
      </div>
    );
  }
}

export default InnerSlideArticle;
