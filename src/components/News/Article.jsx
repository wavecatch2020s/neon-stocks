import React from "react";
import { useSelector } from "react-redux";

const Article = ({ title, text, imageURLIndex, id }) => {
  const articleFromStore = useSelector(
    (state) => state.news.dataOfArticleToBeShown
  );

  let articleToBeShown = {};
  if (!title) {
    articleToBeShown = articleFromStore;
  } else {
    articleToBeShown = {
      title,
      text,
      imageURLIndex,
      id,
    };
  }

  const articleText = articleToBeShown.text.map((paragraph) => {
    return (
      <p>
        {paragraph}
        <br />
        <br />
      </p>
    );
  });

  return (
    <article className="article container">
      <h1>{articleToBeShown.title}</h1>
      <div className="full-width-blur-image">
        <img
          src={
            process.env.PUBLIC_URL +
            `/images/${articleToBeShown.imageURLIndex}.jpg`
          }
          alt={articleToBeShown.title}
        />
      </div>
      {articleText}
    </article>
  );
};

export default Article;
