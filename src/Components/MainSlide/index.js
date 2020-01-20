import React, { Component } from "react";
import "./MainSlideImages.scss";
import { Slide } from "react-slideshow-image";
import SlideItem from "./SlideItem";

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: true,
  onChange: (oldIndex, newIndex) => {}
};

const data = [
  {
    title: "하루종일이용가능한카페&코워킹기획전",
    text: "영감이필요하다면",
    text2: "오늘은 노마드데이",
    img:
      "https://kr.object.ncloudstorage.com/scloud-service/service/157770383_c0161bda51ae62321175f72df6cb03ab.png"
  },
  {
    title: "컨시어지서비스",
    text: "위워크샵을",
    text2: "추천해드립니다.",
    img:
      "https://kr.object.ncloudstorage.com/scloud-service/service/157950681_631a0a790321781f0bb366fb0989b5f5.png"
  },
  {
    title: "신년회추천공간모음",
    text: "새롭게시작하는 2020",
    text2: "신년회로동기부여UP.",
    img:
      "https://kr.object.ncloudstorage.com/scloud-service/service/156921030_ddb6f93776b7ac569e9ca3c45c570906.png"
  }
];

class MainSlideImages extends Component {
  render() {
    return (
      <div className="slide-container">
        <Slide {...properties}>
          {data.map((curr, i) => {
            console.log(curr);
            return <SlideItem data={curr} key={i} />;
          })}
        </Slide>
      </div>
    );
  }
}

export default MainSlideImages;
