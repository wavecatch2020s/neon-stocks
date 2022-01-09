import React, { useState } from "react";
import { useSelector } from "react-redux";
import Article from "./Article";
import Loader from "../Stocks/Loader";
import ArrowUp from "../UI/ArrowUp";

import InfiniteScroll from "react-infinite-scroll-component";

const ArticleSections = () => {
  const [numberOfArticlesShown, showNextArticle] = useState(1);
  const allArticles = useSelector((state) => state.news.allArticles);
  const firstArticleToBeShown = useSelector(
    (state) => state.news.dataOfArticleToBeShown
  );
  const showArrowUp = useSelector((state) => state.ui.showArrowUp);

  const remainingArticles = allArticles.filter(
    (article) => article.id !== firstArticleToBeShown.id
  );

  const LoadNext = () => {
    setTimeout(() => {
      showNextArticle(numberOfArticlesShown + 1);
    }, 1500);
  };

  let generatedList = [];
  if (numberOfArticlesShown <= 9) {
    generatedList = remainingArticles
      .slice(0, numberOfArticlesShown - 1)
      .map((article) => {
        return (
          <Article
            title={article.title}
            text={article.text}
            key={article.id}
            id={article.id}
            imageURLIndex={article.imageURLIndex}
          />
        );
      });
  }

  return (
    <div className="article-container">
      <h1>- News Stories -</h1>
      <Article />
      <InfiniteScroll
        dataLength={generatedList.length} //This is important field to render the next data
        next={() => LoadNext()}
        hasMore={numberOfArticlesShown < 9}
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
      {showArrowUp ? <ArrowUp /> : ""}
    </div>
  );
};

export default ArticleSections;
