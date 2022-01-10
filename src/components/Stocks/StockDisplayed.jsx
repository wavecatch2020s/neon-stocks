import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CompanyCard from "./CompanyCard";

import { useParams } from "react-router-dom";
import { stocksActions } from "../../redux/stocks-slice";

import MainChart from "./MainChart";

const StockDisplayed = () => {
  let displayedStock = useSelector((state) => state.stocks.displayedStock);
  let stocksList = useSelector((state) => state.stocks.stocksList);
  const dispatch = useDispatch();
  const params = useParams();
  const stockItem = stocksList.find(
    (item) => item.ticker === params.stockTicker
  );
  useEffect(() => {
    dispatch(stocksActions.showThisStock(stockItem));
  }, [params]);

  return (
    <div className="container">
      <div className="main-chart">
        <CompanyCard displayedStock={displayedStock} />
        <MainChart />
      </div>
    </div>
  );
};

export default StockDisplayed;
