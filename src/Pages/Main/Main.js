import React from "react";
import MainSlideImages from "../../Components/MainSlide";
import MainGnb from "../../Components/Gnb";
import MainList from "../../Components/MainList";
import "../../Styles/Main.scss";
import MainRecommend from "../../Components/MainRecommend";
import ReViewZone from "../../Components/MainReviewZone";
import Footer from "../../Components/MainFooter";

const Main = () => {
  return (
    <>
      <MainGnb />
      <div className="main_top_contents">
        <MainSlideImages />
        <MainList />
        <MainRecommend />
      </div>
      <ReViewZone />
      <Footer></Footer>
    </>
  );
};

export default Main;
