import React, { Fragment } from "react";
import NewsMainBanner from "../components/News/NewsMainBanner";
import StocksTable from "../components/Stocks/StocksTable";

const Homepage = () => {
  return (
    <Fragment>
      <NewsMainBanner />
      <StocksTable />
    </Fragment>
  );
};

export default Homepage;
