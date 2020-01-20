import React, { Component } from "react";
import "./InnerSlideArticle.scss";
import numberFormat from "../../Utils/numberFormat";

class InnerSlideArticle extends Component {
  state = {
    data: this.props.data
  };
  render() {
    console.log(this.state.data.tag);
    return (
      <div className="inner_slide_article">
        <h3 className="inner_article_title">{this.state.data.title}</h3>
        <div className="inner_article_tag">
          <div className="tag_image"></div>
          <div className="tag_title">
            {this.state.data.location.slice(
              0,
              this.state.data.location.indexOf(" ")
            )}
          </div>
          <div className="tag_hash">
            {this.state.data.tag.map((currTag, i) => {
              return `#${currTag}`;
            })}
          </div>
        </div>
        <div className="inner_slide_price">
          <div className="price">
            {numberFormat(
              this.state.data.price.slice(0, this.state.data.price.indexOf("."))
            )}
          </div>
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
