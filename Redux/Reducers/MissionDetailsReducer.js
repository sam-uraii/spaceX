//initializing state
import {
  UPDATE_MISSION_DATA,
  UPDATE_MISSION_DATA_LOADER,
} from "../../Constants/ReduxConstants";
const initialState = {
  missionData: null,
  isMissionDataLoading: false,
};
const MissionDetailsReducer = (state = initialState, action) => {
  const reducerObject = {
    UPDATE_MISSION_DATA: {
      ...state,
      missionData: action.missionData,
    },
    UPDATE_MISSION_DATA_LOADER: {
      ...state,
      isMissionDataLoading: action.boolVal,
    },
  };

  if (reducerObject.hasOwnProperty(action.type)) {
    return reducerObject[action.type];
  } else {
    return state;
  }
};
export default MissionDetailsReducer;
