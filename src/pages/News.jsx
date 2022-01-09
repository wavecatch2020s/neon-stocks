import React, { Fragment } from "react";
import NewsMainBanner from "../components/News/NewsMainBanner";
import ArticleSections from "../components/News/ArticleSections";

const News = () => {
  return (
    <Fragment>
      <NewsMainBanner />
      <ArticleSections />
    </Fragment>
  );
};

export default News;
