import store from "./store.js";

let currentStoreState = store.getState();

const listenerCallback = () => {
  currentStoreState = store.getState();
};

store.subscribe(listenerCallback);

export const getBookmarkedLaunches = () => {
  return currentStoreState.BookmarkReducer.bookmarkedLaunches;
};
