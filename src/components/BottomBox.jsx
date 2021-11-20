import React from "react";
import ArticleSections from "./News/ArticleSections";
import { useSelector } from "react-redux";
import StocksTable from "./Stock Feed/StocksTable";
const BottomBox = () => {
  const showArticle = useSelector((state) => state.ui.showArticle);
  return <div>{showArticle ? <ArticleSections /> : <StocksTable />}</div>;
};

export default BottomBox;
