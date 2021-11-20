import React from "react";
import { useSelector } from "react-redux";

import MainChart from "./Stock Feed/MainChart";
import "../styles/app.scss";
import NewsMainBanner from "./News/NewsMainBanner";
import BottomBox from "./BottomBox";
import HamburgerMenu from "./UI/HamburgerMenu";

const MainSection = () => {
  const showGraph = useSelector((state) => state.ui.showGraph);
  const showModal = useSelector((state) => state.ui.showModal);

  return (
    <React.Fragment>
      {showModal ? <HamburgerMenu /> : ""}
      <div className="container">
        {showGraph ? <MainChart /> : <NewsMainBanner />}
      </div>

      <BottomBox />
    </React.Fragment>
  );
};

export default MainSection;
