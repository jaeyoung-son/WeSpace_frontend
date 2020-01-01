import React from "react";
import MainSlideImages from "../../Components/MainSlideImages";
import MainGnb from "../../Components/MainGnb";
import MainList from "../../Components/MainList";
import "../../Styles/Main.scss";

const Main = () => {
  return (
    <>
      <MainGnb />
      <div className="main_top_contents">
        <MainSlideImages />
        <MainList />
      </div>
    </>
  );
};

export default Main;
