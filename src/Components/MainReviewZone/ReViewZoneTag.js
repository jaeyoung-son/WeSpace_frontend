import React, { Component } from "react";
import "./ReViewZoneTag.scss";

class ReViewZoneTag extends Component {
  state = {
    tag: this.props.tag
  };
  render() {
    return (
      <div className="review_tag">
        <span className="review_tag_text">{this.state.tag.tag}</span>
      </div>
    );
  }
}

export default ReViewZoneTag;
