import { configureStore } from "@reduxjs/toolkit";
import stocksSlice from "./stocks-slice";
import uiSlice from "./ui-slice";
import newsSlice from "./news-slice";

const store = configureStore({
  reducer: {
    stocks: stocksSlice.reducer,
    ui: uiSlice.reducer,
    news: newsSlice.reducer,
  },
});

export default store;
