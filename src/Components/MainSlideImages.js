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
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
};

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
          {this.state.slideImages.map((currImag, i) => {
            console.log(currImag);
            return <SlideItem slideImage={currImag} key={i} />;
          })}
        </Slide>
      </div>
    );
  }
}

export default MainSlideImages;
