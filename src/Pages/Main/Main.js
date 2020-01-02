import React from "react";
import MainSlideImages from "../../Components/MainSlideImages";
import MainGnb from "../../Components/MainGnb";
import MainList from "../../Components/MainList";
import "../../Styles/Main.scss";
import MainRecommend from "../../Components/MainRecommend";
import ReViewZone from "../../Components/MainReviewZone";

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
    </>
  );
};

export default Main;
