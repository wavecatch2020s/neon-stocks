import React from "react";

import { useDispatch } from "react-redux";
import { newsActions } from "../../redux/news-slice";
import loremipsum from "../../assets/loremipsum";
import LeftNewsStory from "./LeftNewsStory";
import MainNewsStory from "./MainNewsStory";
import RightNewsStory from "./RightNewsStory";

const NewsMainBanner = () => {
  const dispatch = useDispatch();

  function shuffle(array) {
    let m = array.length,
      t,
      i;

    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }

  let simpleArr = [];
  for (let i = 1; i <= 12; i++) {
    simpleArr.push(i);
  }

  const shuffledTextsArray = shuffle(loremipsum.texts);
  const shuffledTitlesArray = shuffle(loremipsum.titles);
  const shuffledImageIndexes = shuffle(simpleArr);

  let leftNewsStories = [];
  let mainStory = {};
  let mainThreeStories = [];

  for (let i = 1; i < 10; i++) {
    if (i < 6) {
      leftNewsStories.push({
        title: shuffledTitlesArray[i],
        text: [
          shuffledTextsArray[i],
          shuffledTextsArray[i + 3],
          shuffledTextsArray[i + 6],
        ],
        id: `news${i}`,
        imageURLIndex: shuffledImageIndexes[i],
      });
    }
    if (i === 6) {
      mainStory = {
        title: shuffledTitlesArray[i],
        text: [
          shuffledTextsArray[i],
          shuffledTextsArray[i - 3],
          shuffledTextsArray[i + 3],
        ],
        imageURLIndex: shuffledImageIndexes[i],
        id: `news${i}`,
      };
    }
    if (i >= 7) {
      mainThreeStories.push({
        title: shuffledTitlesArray[i],
        text: [
          shuffledTextsArray[i],
          shuffledTextsArray[i - 3],
          shuffledTextsArray[i - 6],
        ],
        imageURLIndex: shuffledImageIndexes[i],
        id: `news${i}`,
      });
    }
  }
  const allNewsStories = [mainStory].concat(mainThreeStories, leftNewsStories);
  dispatch(newsActions.allArticles(allNewsStories));

  let leftNews = leftNewsStories.map((story) => {
    return (
      <LeftNewsStory
        title={story.title}
        text={story.text}
        key={story.id}
        id={story.id}
        imageURLIndex={story.imageURLIndex}
      />
    );
  });

  let rightNews = mainThreeStories.map((story) => {
    return (
      <RightNewsStory
        title={story.title}
        text={story.text}
        key={story.id}
        id={story.id}
        imageURLIndex={story.imageURLIndex}
      />
    );
  });

  //initial article to be shown if 'News' button in Header is clicked
  dispatch(newsActions.articleToBeShown(mainStory));

  return (
    <div className="container">
      <div className="news-main-banner">
        <div className="left">{leftNews}</div>
        <div className="middle">
          <MainNewsStory
            title={mainStory.title}
            text={mainStory.text}
            key={mainStory.id}
            id={mainStory.id}
            imageURLIndex={mainStory.imageURLIndex}
          />
        </div>
        <div className="right">{rightNews}</div>
      </div>
    </div>
  );
};

export default NewsMainBanner;
