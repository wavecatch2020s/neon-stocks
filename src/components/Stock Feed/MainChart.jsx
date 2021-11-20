import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CompanyCard from "./CompanyCard";
import { uiActions } from "../../redux/ui-slice";

import LineChart from "./LineChart";

const MainChart = () => {
  let highlightedRange = useSelector((state) => state.ui.highlightedTimeRange);
  let displayedStock = useSelector((state) => state.stocks.displayedStock);
  const [changedTimeRangeData, setChangedTimeRangeData] = useState(
    displayedStock.data
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setChangedTimeRangeData(displayedStock.data);
  }, [displayedStock]);

  console.log("MainChart rerendered");

  let modifiedDisplayedStock = {
    ...displayedStock,
    shownData: displayedStock.data,
  };

  const changeTimeRange = (range) => {
    modifiedDisplayedStock.shownData = modifiedDisplayedStock.data.slice(
      0,
      range
    );
    dispatch(uiActions.highlightedTimeRange(range));
    setChangedTimeRangeData(modifiedDisplayedStock.shownData);
  };
  console.log(highlightedRange);

  return (
    <div className="main-chart">
      <CompanyCard displayedStock={displayedStock} />
      <div className="main-canvas">
        <LineChart
          chartData={changedTimeRangeData}
          color="#22f0ff"
          chartType="advanced"
        />
        <div className="change-time-range">
          <h3>Last:</h3>
          <button
            className={highlightedRange === 15 ? "highlighted" : ""}
            onClick={() => changeTimeRange(15)}
          >
            24h
          </button>
          <button
            className={highlightedRange === 45 ? "highlighted" : ""}
            onClick={() => changeTimeRange(45)}
          >
            3 days
          </button>
          <button
            className={highlightedRange === 105 ? "highlighted" : ""}
            onClick={() => changeTimeRange(105)}
          >
            7 days
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainChart;
