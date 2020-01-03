import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ReViewZoneArticle.scss";
import ReViewZoneTag from "./ReViewZoneTag";
import ReViewZoneStar from "./ReViewZoneStar";
import numberFormat from "../../Utils/numberFormat";

class ReViewZoneArticle extends Component {
  state = {
    data: this.props.data,
    img: ""
  };
  componentDidMount() {
    if (this.props.data.image.length === 0) {
      this.setState({
        img:
          "https://moplqfgeemqv2103108.cdn.ntruss.com/service/157552250_6fff0cb9bead09ef0d8f38e8bbc3a3b7.jpg?type=m&w=900&h=900&autorotate=true&quality=90"
      });
    } else {
      this.setState({
        img: this.state.data.image[0]
      });
    }
  }
  randomNumber() {
    return Math.floor(Math.random() * 6);
  }
  render() {
    const link = `/detail/${this.props.id}`;
    return (
      <Link to={link}>
        <div className="review_pohto_wrap">
          <img src={this.state.img} alt="공간이미지"></img>
          <div className="space_content">
            {this.state.data.tag.map((curr, i) => {
              return <ReViewZoneTag tag={curr} key={i} />;
            })}
            <div className="space_title">{this.state.data.title}</div>
            <div className="space_price">
              <span>
                {numberFormat(
                  this.state.data.price.slice(
                    0,
                    this.state.data.price.indexOf(".")
                  )
                )}
              </span>
              <span>원/시간</span>
            </div>
            <ReViewZoneStar star={this.randomNumber()} data={this.state.data} />
          </div>
        </div>
      </Link>
    );
  }
}

export default ReViewZoneArticle;
