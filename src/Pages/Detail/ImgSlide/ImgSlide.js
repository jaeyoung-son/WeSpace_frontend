import { Slide } from "react-slideshow-image";
import fetchData from "../../../Utils/fetch";
import "./ImgSlide.scss";
import React, { Component } from "react";

const proprietes = {
  duration: 5000,
  transitionDuration: 1,
  infinite: true,
  arrows: true,
  indicators: true
};

class ImgSlide extends Component {
  state = {
    link: []
  };

  componentDidMount() {
    fetchData("http://localhost:3000/data/data.json").then(res => {
      this.setState({
        link: res.spaceData.imgLink
      });
    });
  }

  render() {
    const { link } = this.state;
    const slideLink = link.map((el, index) => (
      <div className="parent_div" key={index}>
        <div className="left_slide"></div>
        <img src={el} alt="img1" />
        <div className="right_slide"></div>
      </div>
    ));

    return (
      <div className="slide_container">
        <Slide {...proprietes}>{slideLink}</Slide>
      </div>
    );
  }
}

export default ImgSlide;
