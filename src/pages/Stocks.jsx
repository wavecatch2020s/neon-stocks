import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";

import MainChart from "../components/Stocks/MainChart";
import StocksTable from "../components/Stocks/StocksTable";

const Stocks = () => {
  const stocksList = useSelector((state) => state.stocks.stocksList);

  return stocksList.length > 0 ? (
    <Fragment>
      <Route path="/stocks/:stockTicker">
        <MainChart />
      </Route>
      <StocksTable />
    </Fragment>
  ) : (
    <div className="spinner"></div>
  );
};

export default Stocks;
