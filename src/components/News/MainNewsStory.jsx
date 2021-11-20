import React from "react";
import { useDispatch } from "react-redux";
import { newsActions } from "../../redux/news-slice";
import { uiActions } from "../../redux/ui-slice";

const MainNewsStory = ({ title, text, id, imageURLIndex }) => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(newsActions.articleToBeShown({ title, text, id, imageURLIndex }));
    dispatch(uiActions.showArticle(true));
    window.scrollTo({ top: 500, left: 0, behavior: "smooth" });
  };

  return (
    <div className="middle-news-item" onClick={clickHandler}>
      <h1>{title}</h1>
      <img
        alt={title}
        src={process.env.PUBLIC_URL + `/images/${imageURLIndex}.jpg`}
      />
    </div>
  );
};

export default MainNewsStory;
