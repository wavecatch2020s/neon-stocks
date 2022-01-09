import React from "react";
import { Switch, Route } from "react-router-dom";

import "../../styles/app.scss";
import Stocks from "../../pages/Stocks";
import News from "../../pages/News";
import Homepage from "../../pages/Homepage";
import { useSelector } from "react-redux";

const MainLayout = () => {
  const stocksList = useSelector((state) => state.stocks.stocksList);
  console.log(stocksList);
  return (
    <Switch>
      {stocksList.length > 0 ? (
        <Route path="/" exact>
          <Homepage />
        </Route>
      ) : (
        <div className="centered">
          <div className="spinner"></div>
        </div>
      )}
      {stocksList.length > 0 ? (
        <Route path="/stocks">
          <Stocks />
        </Route>
      ) : (
        <div className="centered">
          <div className="spinner"></div>
        </div>
      )}
      <Route path="/news">
        <News />
      </Route>
    </Switch>
  );
};

export default MainLayout;
