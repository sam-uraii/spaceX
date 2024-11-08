//initializing state
import {
  UPDATE_LAUNCH_DATA,
  UPDATE_LAUNCH_DATA_LOADER,
  UPDATE_SELECTED_LAUNCH_DETAIL,
  UPDATE_FULL_LAUNCH_DETAILS_OF_SELECTED_LAUNCH,
  UPDATE_FULL_LAUNCH_DETAILS_LOADING,
} from "../../Constants/ReduxConstants";
const initialState = {
  launchData: [],
  isLaunchDataLoading: false,
  selectedLaunchDetail: null,
  fullLaunchDetailsOfSelectedLaunch: null,
  areFullLaunchDetailsLoading: false,
};
const LaunchDataReducer = (state = initialState, action) => {
  const reducerObject = {
    UPDATE_LAUNCH_DATA: {
      ...state,
      launchData: action.launchData,
    },
    UPDATE_LAUNCH_DATA_LOADER: {
      ...state,
      isLaunchDataLoading: action.boolVal,
    },
    UPDATE_SELECTED_LAUNCH_DETAIL: {
      ...state,
      selectedLaunchDetail: action.selectedLaunchDetail,
    },
    UPDATE_FULL_LAUNCH_DETAILS_OF_SELECTED_LAUNCH: {
      ...state,
      fullLaunchDetailsOfSelectedLaunch:
        action.fullLaunchDetailsOfSelectedLaunch,
    },
    UPDATE_FULL_LAUNCH_DETAILS_LOADING: {
      ...state,
      areFullLaunchDetailsLoading: action.boolVal,
    },
  };

  if (reducerObject.hasOwnProperty(action.type)) {
    return reducerObject[action.type];
  } else {
    return state;
  }
};
export default LaunchDataReducer;
