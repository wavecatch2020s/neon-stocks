import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import LineChart from "./LineChart";

const StocksRow = (props) => {
  const highlightedRowTicker = useSelector(
    (state) => state.stocks.displayedStock
  );

  const openChart = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`row ${
        props.stockItem.ticker === highlightedRowTicker.ticker
          ? "highlighted-row"
          : ""
      }`}
    >
      <div className="item-number">{props.index + 1}</div>
      <div onClick={openChart} className="item-name">
        <Link to={`/stocks/${props.stockItem.ticker}`}>
          <h3>{props.stockItem.name}</h3>
          <h5>{props.stockItem.ticker}</h5>
        </Link>
      </div>
      <div className="item-price">{`$${props.stockItem.currentPrice}`}</div>
      <div
        className={`price-change ${
          props.stockItem.priceChanges.oneDayChange > 0 ? "green" : "red"
        }`}
      >
        {`${props.stockItem.priceChanges.oneDayChange}%`}
      </div>
      <div
        className={`price-change ${
          props.stockItem.priceChanges.sevenDaysChange > 0 ? "green" : "red"
        }`}
      >
        {`${props.stockItem.priceChanges.sevenDaysChange}%`}
      </div>
      <div className="market-cap">{props.stockItem.marketCap}</div>
      <div className="supply">{props.stockItem.shareOutstanding}</div>
      <div className="last-seven-days">
        <LineChart
          chartData={props.stockItem.data}
          chartType="simple"
          color={
            props.stockItem.priceChanges.sevenDaysChange > 0
              ? "#9affae"
              : "#ff9393"
          }
        />
      </div>
    </div>
  );
};

export default StocksRow;
