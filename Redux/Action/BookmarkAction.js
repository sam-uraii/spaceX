import { UPDATE_BOOKMARKED_LAUNCHES } from "../../Constants/ReduxConstants";

export const updateBookmarkedLaunches = (bookmarkedLaunches) => {
  return {
    type: UPDATE_BOOKMARKED_LAUNCHES,
    bookmarkedLaunches,
  };
};
