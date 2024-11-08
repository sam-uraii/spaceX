import { UPDATE_BOOKMARKED_LAUNCHES } from "../../Constants/ReduxConstants";

export const updateBookmarkedLaunches = (bookmarkedLaunches) => {
  console.log(bookmarkedLaunches);
  return {
    type: UPDATE_BOOKMARKED_LAUNCHES,
    bookmarkedLaunches,
  };
};
