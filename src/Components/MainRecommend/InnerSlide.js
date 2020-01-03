import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./MainRecommend.scss";
import InnerSlideArticle from "./InnerSlideArticle.js";
import Payment from "./Payment";

class InnerSlide extends Component {
  state = {
    data: this.props.data
  };
  render() {
    return (
      <>
        {this.state.data.map((currSpace, i) => {
          return (
            <div className="main_inner_slide" key={i}>
              <Carousel
                width={"100%"}
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
                infiniteLoop={true}
              >
                {this.state.data[i].image.map((currImg, j) => {
                  return (
                    <div className="inner_slide_image" key={j}>
                      <img src={currImg.space_image} alt="추천 이미지" />
                    </div>
                  );
                })}
              </Carousel>
              <Payment />
              <InnerSlideArticle data={currSpace} />
            </div>
          );
        })}
      </>
    );
  }
}

export default InnerSlide;
