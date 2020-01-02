import React, { Component } from "react";
import "./SlideItem.scss";
import { Link } from "react-router-dom";

class SlideItem extends Component {
  render() {
    return (
      <Link to="/" className="slide_wrap">
        <div className="each-slide">
          <div
            style={{ backgroundImage: `url(${this.props.slideImage})` }}
            className="slideItem_image"
          >
            <div className="slideItem_article">
              <h3 className="slideItem_title">제목</h3>
              <p className="slideItem_text">
                워크샵 장소를 <br />
                추천해 드립니다
              </p>
              <br />
              <div className="slideItem_btn">바로가기</div>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default SlideItem;
