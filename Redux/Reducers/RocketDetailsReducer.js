//initializing state
import {
  UPDATE_ROCKET_DATA,
  UPDATE_ROCKET_DATA_LOADER,
} from "../../Constants/ReduxConstants";
const initialState = {
  rocketData: null,
  isRocketDataLoading: false,
};
const RocketDetailsReducer = (state = initialState, action) => {
  const reducerObject = {
    UPDATE_ROCKET_DATA: {
      ...state,
      rocketData: action.rocketData,
    },
    UPDATE_ROCKET_DATA_LOADER: {
      ...state,
      isRocketDataLoading: action.boolVal,
    },
  };

  if (reducerObject.hasOwnProperty(action.type)) {
    return reducerObject[action.type];
  } else {
    return state;
  }
};
export default RocketDetailsReducer;
