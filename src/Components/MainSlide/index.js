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
      "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: "컨시어지서비스",
    text: "위워크샵을",
    text2: "추천해드립니다.",
    img:
      "https://images.unsplash.com/photo-1489084917528-a57e68a79a1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: "신년회추천공간모음",
    text: "새롭게시작하는 2020",
    text2: "신년회로동기부여UP.",
    img:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  }
];

class MainSlideImages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideImages: [
        "https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736877_960_720.jpg",
        "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      ]
    };
  }
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
