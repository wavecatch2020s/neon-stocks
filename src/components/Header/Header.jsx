import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../redux/ui-slice";
import SearchContainer from "./SearchContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const dispatch = useDispatch();
  const stocksListCheck = useSelector((state) => state.stocks.stocksList[0]);

  const hamburgerClickHandler = () => {
    dispatch(uiActions.showModal(true));
  };

  const feedChange = (feedName) => {
    if (stocksListCheck) {
      if (feedName === "stocks") {
        dispatch(uiActions.showGraph(true));
        dispatch(uiActions.showArticle(false));
      } else if (feedName === "news") {
        dispatch(uiActions.showGraph(false));
        dispatch(uiActions.showArticle(true));
      } else if (feedName === "home") {
        dispatch(uiActions.showGraph(false));
        dispatch(uiActions.showArticle(false));
      }
    }
  };

  return (
    <header>
      <h1 onClick={() => feedChange("home")}>NEON STOCKS</h1>
      <div className="right-wrapper">
        <SearchContainer />
        <button onClick={hamburgerClickHandler} className="hamburger-menu">
          <FontAwesomeIcon icon={faBars} />
        </button>
        <button onClick={() => feedChange("stocks")} className="header-item">
          Stocks
        </button>
        <button className="header-item" onClick={() => feedChange("news")}>
          News
        </button>
      </div>
    </header>
  );
};
export default Header;
