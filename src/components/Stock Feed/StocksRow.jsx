import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { stocksActions } from "../../redux/stocks-slice";
import { uiActions } from "../../redux/ui-slice";
import LineChart from "./LineChart";

const StocksRow = (props) => {
  const dispatch = useDispatch();
  const highlightedRowTicker = useSelector(
    (state) => state.stocks.displayedStock
  );
  const showGraph = useSelector((state) => state.ui.showGraph);

  const openChart = () => {
    dispatch(stocksActions.showThisStock(props.stockItem));
    dispatch(uiActions.showGraph(true));
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`row ${
        props.stockItem.ticker === highlightedRowTicker.ticker && showGraph
          ? "highlighted-row"
          : ""
      }`}
      onClick={openChart}
    >
      <div className="item-number">{props.index + 1}</div>
      <div className="item-name">
        <h3>{props.stockItem.name}</h3>
        <h5>{props.stockItem.ticker}</h5>
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
