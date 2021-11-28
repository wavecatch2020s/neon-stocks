import React, { useState, useEffect } from "react";

const CompanyCard = ({ displayedStock }) => {
  // const [animatedStatus, setAnimated] = useState(true);
  const const1 = displayedStock.priceChanges.oneDayChange;
  const const2 = displayedStock.priceChanges.sevenDaysChange;

  // useEffect(() => {
  //   setAnimated(true);
  // }, [displayedStock.logo]);

  // useEffect(() => {
  //   let timer2 = setTimeout(() => {
  //     console.log("timer works");
  //     setAnimated(false);
  //   }, 2000);
  //   return () => {
  //     clearTimeout(timer2);
  //   };
  // }, [displayedStock.logo]);

  return (
    <div className="left-side">
      <div className="top" id="top">
        <div className="top-left">
          <img src={displayedStock.logo} alt="" />
        </div>
        <div className="top-right">
          <div>
            <h1>{displayedStock.name}</h1>
            <h2 className="ticker">{displayedStock.ticker}</h2>
          </div>
          <h2>{`$${displayedStock.currentPrice}`}</h2>
          <h2 className={const2 > 0 ? "green" : "red"}>{`${const2}%`}</h2>
        </div>
      </div>
      <div className="bottom">
        <div className="price-change-one company-info-item">
          <span>24h change: </span>
          <span className={const1 > 0 ? "green" : "red"}>{const1}%</span>
        </div>
        <div className="price-change-seven company-info-item">
          <span>7d change: </span>
          <span className={const2 > 0 ? "green" : "red"}>{const2}%</span>
        </div>
        <div className="country company-info-item">
          <span>Country: </span>
          <span>{displayedStock.country}</span>
        </div>
        <div className="industry company-info-item">
          <span>Industry: </span>
          <span>{displayedStock.industry}</span>
        </div>
        <div className="exchange company-info-item">
          <span>Exchange: </span>
          <span className="exchange-result">{displayedStock.exchange}</span>
        </div>
        <div className="market-cap company-info-item">
          <span>MarketCap: </span>
          <span>{displayedStock.marketCap}</span>
        </div>
        <div className="outstanding-shares company-info-item">
          <span>Shares Supply:</span>
          <span>{displayedStock.shareOutstanding}</span>
        </div>
        <div className="weburl company-info-item">
          <span>Website: </span>
          <span>
            <a href={displayedStock.weburl}>{displayedStock.weburl}</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
