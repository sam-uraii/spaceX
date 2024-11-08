import { combineReducers } from "redux";
import LaunchDataReducer from "./LaunchDataReducer";
import RocketDetailsReducer from "./RocketDetailsReducer";
import MissionDetailsReducer from "./MissionDetailsReducer";
import BookmarkReducer from "./BookmarkReducer";

export default combineReducers({
  LaunchDataReducer,
  RocketDetailsReducer,
  MissionDetailsReducer,
  BookmarkReducer,
});
