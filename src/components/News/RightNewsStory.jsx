import React from "react";
import { useDispatch } from "react-redux";
import { newsActions } from "../../redux/news-slice";
import { Link } from "react-router-dom";

const RightNewsStory = ({ title, text, id, imageURLIndex }) => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(newsActions.articleToBeShown({ title, text, id, imageURLIndex }));
    window.scrollTo({ top: 500, left: 0, behavior: "smooth" });
  };

  return (
    <div className="news-right-item" onClick={clickHandler}>
      <Link to="/news">
        <h2>{title}</h2>
        <img
          className="news-right-img"
          alt={title}
          src={process.env.PUBLIC_URL + `/images/${imageURLIndex}.jpg`}
        />
      </Link>
    </div>
  );
};

export default RightNewsStory;
