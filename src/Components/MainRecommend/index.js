import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import InnerSlide from "./InnerSlide";
import "./MainRecommend.scss";
import { API_YERIN_URL } from "../../config";
import axios from "axios";

class MainRecommend extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    axios
      .get(`${API_YERIN_URL}/space/recommend`)
      .then(res => {
        let a = res.data.data;
        let b = [];
        for (let i = 0; i < a.length; i = i + 3) {
          b.push(a.slice(i, i + 3));
        }
        this.setState({ data: b });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="main_recommend_wrap background_gray">
        <div className="main_sub_title">오늘의 추천 공간</div>
        <div className="main_outer_slide">
          <Carousel
            width={`100%`}
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            infiniteLoop={true}
          >
            {this.state.data.map((curr, i) => {
              return (
                <div className="outer_slide_content" key={i}>
                  <InnerSlide data={curr}></InnerSlide>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    );
  }
}

export default MainRecommend;
