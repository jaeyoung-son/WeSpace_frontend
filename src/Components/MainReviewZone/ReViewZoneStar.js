import React, { Component } from "react";
import "./ReViewZoneStar.scss";

class ReViewZoneStar extends Component {
  state = {
    star: this.props.star,
    data: this.props.data
  };
  createStar() {
    const result = [];
    for (let i = 1; i <= this.state.star; i++) {
      result.push(<span className="full_star"></span>);
    }
    for (let j = this.state.star; j < 5; j++) {
      result.push(<span className="empty_star"></span>);
    }
    return result;
  }
  render() {
    return (
      <div className="space_review_area">
        <div className="review_rate">{this.createStar()}</div>
        <div className="space_text">
          {this.state.data.long_intro.slice(0, 100)}
        </div>
      </div>
    );
  }
}

export default ReViewZoneStar;
