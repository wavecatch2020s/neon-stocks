import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import InfiniteScroll from "react-infinite-scroll-component";

import StocksRow from "./StocksRow";
import finnhubCompaniesList from "../../assets/finnhubCompaniesList";
import Loader from "./Loader";

const StocksTable = () => {
  const [numberOfStocksLoaded, LoadMoreStocks] = useState(9);
  const stocksList = useSelector((state) => state.stocks.stocksList);
  console.log(stocksList);

  const topRow = (
    <div className="top-row row">
      <div className="item-number">#</div>
      <div className="item-name">
        <h3>Name</h3>
        <h5>TICKER</h5>
      </div>
      <div className="item-price">Price</div>
      <div className="price-change">24h%</div>
      <div className="price-change">7d%</div>
      <div className="market-cap">Market Cap</div>
      <div className="supply">Circulating Supply</div>
      <div className="last-seven-days">Last 7 Days</div>
    </div>
  );

  const LoadNext3 = () => {
    setTimeout(() => {
      LoadMoreStocks(numberOfStocksLoaded + 3);
    }, 1000);
  };

  //data to be loaded
  const allStocks = finnhubCompaniesList;
  let populatedList = [];

  if (stocksList.length > 0) {
    populatedList = allStocks
      .map((stock) => {
        const foundIndex = stocksList.findIndex(
          (item) => item.ticker === stock
        );
        return stocksList[foundIndex];
      })
      .slice(0, -1);
  }
  console.log(allStocks);
  console.log(populatedList);

  let generatedList = [];

  // if data is fetched from API and then loaded from redux
  if (
    stocksList.length > 0
    // &&
    // numberOfStocksLoaded <= finnhubCompaniesList.length
  ) {
    generatedList = populatedList
      .slice(0, numberOfStocksLoaded)
      .map((stockItem, index) => {
        return (
          <StocksRow
            key={stockItem.ticker}
            stockItem={stockItem}
            index={index}
          />
        );
      });
  }

  return (
    <div className="container">
      <div className="stocks-table">
        {topRow}
        {generatedList.length > 0 && generatedList.length <= 15 && (
          <InfiniteScroll
            dataLength={generatedList.length} //This is important field to render the next data
            next={() => LoadNext3()}
            hasMore={generatedList.length < 15}
            loader={<Loader style={{ margin: "1rem auto" }} />}
            // scrollThreshold={"200px"}
            endMessage={
              <p style={{ textAlign: "center", marginTop: "1rem" }}>
                <b>end</b>
              </p>
            }
          >
            {generatedList}
          </InfiniteScroll>
        )}
      </div>
    </div>
  );
};

export default StocksTable;
