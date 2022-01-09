import React from "react";
import { useDispatch } from "react-redux";
import { newsActions } from "../../redux/news-slice";
import { Link } from "react-router-dom";

const MainNewsStory = ({ title, text, id, imageURLIndex }) => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(newsActions.articleToBeShown({ title, text, id, imageURLIndex }));
    window.scrollTo({ top: 500, left: 0, behavior: "smooth" });
  };

  return (
    <div className="middle-news-item" onClick={clickHandler}>
      <Link to="/news">
        <h1>{title}</h1>
        <img
          alt={title}
          src={process.env.PUBLIC_URL + `/images/${imageURLIndex}.jpg`}
        />
      </Link>
    </div>
  );
};

export default MainNewsStory;
