import React from "react";
import MainSlideImages from "../../Components/MainSlideImages";
import MainGnb from "../../Components/MainGnb";
import KaKaoMap from "../../Components/KaKaoMap";

const Main = () => {
  return (
    <>
      <MainGnb />
      <MainSlideImages />
      <KaKaoMap address={"도영로 80"} />
    </>
  );
};

export default Main;
