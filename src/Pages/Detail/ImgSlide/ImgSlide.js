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
    //   fetchData("http://localhost:3000/data/data.json").then(res => {
    //     this.setState({
    //       link: res.spaceData.imgLink
    //     });
    //   });
    const link = this.props.match.params.name;
    fetchData(`http://10.58.7.97:8000/space/${link}`).then(res => {
      this.setState({
        link: res
      });
    });
  }

  render() {
    const { link } = this.state;
    if (link.result === undefined) return <></>;
    console.log({ link });
    const slideLink = link.result[0].space_images.map((el, index) => (
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
