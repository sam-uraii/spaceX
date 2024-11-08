import {
  UPDATE_FULL_LAUNCH_DETAILS_LOADING,
  UPDATE_FULL_LAUNCH_DETAILS_OF_SELECTED_LAUNCH,
  UPDATE_LAUNCH_DATA,
  UPDATE_LAUNCH_DATA_LOADER,
  UPDATE_SELECTED_LAUNCH_DETAIL,
} from "../../Constants/ReduxConstants";

export const updateLaunchData = (launchData) => {
  return {
    type: UPDATE_LAUNCH_DATA,
    launchData,
  };
};
export const updateLaunchDataLoader = (boolVal) => {
  return {
    type: UPDATE_LAUNCH_DATA_LOADER,
    boolVal,
  };
};
export const updateSelectedLaunchDetail = (selectedLaunchDetail) => {
  return {
    type: UPDATE_SELECTED_LAUNCH_DETAIL,
    selectedLaunchDetail,
  };
};
export const updateFullLaunchDetailsOfSelectedLaunch = (
  fullLaunchDetailsOfSelectedLaunch
) => {
  return {
    type: UPDATE_FULL_LAUNCH_DETAILS_OF_SELECTED_LAUNCH,
    fullLaunchDetailsOfSelectedLaunch,
  };
};

export const updateFullLaunchDetailsLoading = (boolVal) => {
  return {
    type: UPDATE_FULL_LAUNCH_DETAILS_LOADING,
    boolVal,
  };
};
