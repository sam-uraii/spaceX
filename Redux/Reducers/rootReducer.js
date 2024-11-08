import { combineReducers } from "redux";
import LaunchDataReducer from "./LaunchDataReducer";
import RocketDetailsReducer from "./RocketDetailsReducer";
import MissionDetailsReducer from "./MissionDetailsReducer";

export default combineReducers({
  LaunchDataReducer,
  RocketDetailsReducer,
  MissionDetailsReducer,
});
