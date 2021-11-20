import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
  name: "news",
  initialState: {
    allArticles: [],
    dataOfArticleToBeShown: {},
  },
  reducers: {
    allArticles(state, action) {
      const allArticles = action.payload;

      state.allArticles = allArticles;
    },
    articleToBeShown(state, action) {
      const selectedArticleData = action.payload;

      state.dataOfArticleToBeShown = selectedArticleData;
    },
  },
});

export const newsActions = newsSlice.actions;
export default newsSlice;
