import React from "react";
import { useDispatch } from "react-redux";
import { newsActions } from "../../redux/news-slice";
import { uiActions } from "../../redux/ui-slice";

const RightNewsStory = ({ title, text, id, imageURLIndex }) => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(newsActions.articleToBeShown({ title, text, id, imageURLIndex }));
    dispatch(uiActions.showArticle(true));
    window.scrollTo({ top: 500, left: 0, behavior: "smooth" });
  };

  return (
    <div className="news-right-item" onClick={clickHandler}>
      <h2>{title}</h2>
      <img
        className="news-right-img"
        alt={title}
        src={process.env.PUBLIC_URL + `/images/${imageURLIndex}.jpg`}
      />
    </div>
  );
};

export default RightNewsStory;
