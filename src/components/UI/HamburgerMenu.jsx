import React from "react";
import Modal from "./Modal";

import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../redux/ui-slice";
const HamburgerMenu = () => {
  const dispatch = useDispatch();
  const stocksListCheck = useSelector((state) => state.stocks.stocksList[0]);

  const justCloseModal = () => {
    dispatch(uiActions.showModal(false));
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
      dispatch(uiActions.showModal(false));
    }
  };
  return (
    <Modal justCloseModal={justCloseModal}>
      <button onClick={() => feedChange("stocks")} className="header-item">
        Stocks
      </button>
      <button className="header-item" onClick={() => feedChange("news")}>
        News
      </button>
    </Modal>
  );
};

export default HamburgerMenu;
