import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import InnerSlide from "./InnerSlide";
import "./MainRecommend.scss";

const data = [
  "https://moplqfgeemqv2103108.cdn.ntruss.com/service/157672891_d701b51bcc718158223a9bf90f496f49.jpeg?type=m&w=900&h=900&autorotate=true&quality=90",
  "https://moplqfgeemqv2103108.cdn.ntruss.com/service/157673033_0fed3fbd057c449b66e91289691618fc.jpeg?type=m&w=900&h=900&autorotate=true&quality=90",
  "https://moplqfgeemqv2103108.cdn.ntruss.com/service/157672892_5bcdc9aac73f6788fe886ca586e564af.jpeg?type=m&w=900&h=900&autorotate=true&quality=90"
];
const data2 = [
  "https://moplqfgeemqv2103108.cdn.ntruss.com/service/157680595_0f4be8eb407bb34fc573544276859820.png?type=m&w=900&h=900&autorotate=true&quality=90",
  "https://moplqfgeemqv2103108.cdn.ntruss.com/service/157680597_6227234273c356fbbe7a44425baea2a3.png?type=m&w=900&h=900&autorotate=true&quality=90",
  "https://moplqfgeemqv2103108.cdn.ntruss.com/service/157680598_648ec274d94035085a5175faa5ceddb9.jpg?type=m&w=900&h=900&autorotate=true&quality=90"
];

class MainRecommend extends Component {
  render() {
    return (
      <div className="main_recommend_wrap background_gray">
        <div className="main_sub_title">오늘의 추천 공간</div>
        <div className="main_outer_slide">
          <Carousel width={`100%`} showThumbs={false} showStatus={false} showIndicators={false} infiniteLoop={true}>
            <div className="outer_slide_content">
              <InnerSlide data={data}></InnerSlide>
            </div>
            <div className="outer_slide_content">
              <InnerSlide data={data2}></InnerSlide>
            </div>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default MainRecommend;
