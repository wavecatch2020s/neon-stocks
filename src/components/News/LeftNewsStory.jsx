import React from "react";
import { useDispatch } from "react-redux";
import { newsActions } from "../../redux/news-slice";
import { Link } from "react-router-dom";

const LeftNewsStory = ({ title, text, id, imageURLIndex }) => {
  const dispatch = useDispatch();
  const first60Characters = text[0].slice(0, 120);

  const clickHandler = () => {
    dispatch(newsActions.articleToBeShown({ title, text, id, imageURLIndex }));
    window.scrollTo({ top: 500, left: 0, behavior: "smooth" });
  };

  return (
    <div className="news-left-item" onClick={clickHandler}>
      <Link to="/news">
        <h3>{title}</h3>
        <p className="paragraph">{first60Characters}...</p>
      </Link>
    </div>
  );
};

export default LeftNewsStory;
