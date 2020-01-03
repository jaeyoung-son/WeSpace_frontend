import React, { Component } from "react";
import "./SlideItem.scss";
import { Link } from "react-router-dom";

class SlideItem extends Component {
  render() {
    return (
      <Link to="/" className="slide_wrap">
        <div className="each-slide">
          <div
            style={{ backgroundImage: `url(${this.props.data.img})` }}
            className="slideItem_image"
          >
            <div className="slideItem_article">
              <h3 className="slideItem_title">{this.props.data.title}</h3>
              <p className="slideItem_text">
                {this.props.data.text} <br />
                {this.props.data.text2}
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
