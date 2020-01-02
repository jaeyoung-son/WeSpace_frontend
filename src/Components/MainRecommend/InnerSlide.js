import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./MainRecommend.scss";
import InnerSlideArticle from "./InnerSlideArticle.js";
import Payment from "./Payment";

class InnerSlide extends Component {
  render() {
    return (
      <>
        <div className="main_inner_slide">
          <Carousel width={"100%"} showThumbs={false} showStatus={false} showIndicators={false} infiniteLoop={true}>
            {this.props.data.map((curr, i) => {
              return (
                <div className="inner_slide_image" key={i}>
                  <img src={curr} alt="추천 이미지" />
                </div>
              );
            })}
          </Carousel>
          <Payment />
          <InnerSlideArticle />
        </div>
        <div className="main_inner_slide">
          <Carousel width={"100%"} showThumbs={false} showStatus={false} showIndicators={false} infiniteLoop={true}>
            <div className="inner_slide_image">
              <img src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" alt="추천 이미지" />
            </div>
            <div className="inner_slide_image">
              <img src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" alt="추천 이미지" />
            </div>
            <div className="inner_slide_image">
              <img src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" alt="추천 이미지" />
            </div>
          </Carousel>
          <Payment />
          <InnerSlideArticle />
        </div>
        <div className="main_inner_slide">
          <Carousel width={"100%"} showThumbs={false} showStatus={false} showIndicators={false} infiniteLoop={true}>
            <div className="inner_slide_image">
              <img src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" alt="추천 이미지" />
            </div>
            <div className="inner_slide_image">
              <img src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" alt="추천 이미지" />
            </div>
            <div className="inner_slide_image">
              <img src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" alt="추천 이미지" />
            </div>
          </Carousel>
          <Payment />
          <InnerSlideArticle />
        </div>
      </>
    );
  }
}

export default InnerSlide;
