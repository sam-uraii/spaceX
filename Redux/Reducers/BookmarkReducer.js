//initializing state
import { UPDATE_BOOKMARKED_LAUNCHES } from "../../Constants/ReduxConstants";
const initialState = {
  bookmarkedLaunches: {},
};
const BookmarkReducer = (state = initialState, action) => {
  const reducerObject = {
    UPDATE_BOOKMARKED_LAUNCHES: {
      ...state,
      bookmarkedLaunches: action.bookmarkedLaunches,
    },
  };
  if (reducerObject.hasOwnProperty(action.type)) {
    return reducerObject[action.type];
  } else {
    return state;
  }
};
export default BookmarkReducer;
