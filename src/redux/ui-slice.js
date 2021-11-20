import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    showGraph: false,
    showArticle: false,
    showArrowUp: false,
    highlightedTimeRange: 105,
    showModal: false,
  },
  reducers: {
    showGraph(state, action) {
      const newStatus = action.payload;
      state.showGraph = newStatus;
    },
    showArticle(state, action) {
      const newStatus = action.payload;
      state.showArticle = newStatus;
    },
    showArrowUp(state, action) {
      const newStatus = action.payload;
      state.showArrowUp = newStatus;
    },
    highlightedTimeRange(state, action) {
      const newStatus = action.payload;
      state.highlightedTimeRange = newStatus;
    },
    showModal(state, action) {
      const newStatus = action.payload;
      state.showModal = newStatus;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
