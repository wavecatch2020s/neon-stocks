import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";

import StockDisplayed from "../components/Stocks/StockDisplayed";
import StocksTable from "../components/Stocks/StocksTable";

const Stocks = () => {
  const stocksList = useSelector((state) => state.stocks.stocksList);

  return stocksList.length > 0 ? (
    <Fragment>
      <Route path="/stocks/:stockTicker">
        <StockDisplayed />
      </Route>
      <StocksTable />
    </Fragment>
  ) : (
    <div className="spinner"></div>
  );
};

export default Stocks;
