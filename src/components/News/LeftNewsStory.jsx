import React from "react";
import { useDispatch } from "react-redux";
import { newsActions } from "../../redux/news-slice";
import { uiActions } from "../../redux/ui-slice";

const LeftNewsStory = ({ title, text, id, imageURLIndex }) => {
  const dispatch = useDispatch();
  const first60Characters = text[0].slice(0, 120);

  const clickHandler = () => {
    dispatch(newsActions.articleToBeShown({ title, text, id, imageURLIndex }));
    dispatch(uiActions.showArticle(true));
    window.scrollTo({ top: 500, left: 0, behavior: "smooth" });
  };

  return (
    <div className="news-left-item" onClick={clickHandler}>
      <h3>{title}</h3>
      <p className="paragraph">{first60Characters}...</p>
    </div>
  );
};

export default LeftNewsStory;
