import api from "../../axiosAdaptor";
import {
  updateFullLaunchDetailsLoading,
  updateFullLaunchDetailsOfSelectedLaunch,
  updateLaunchData,
  updateLaunchDataLoader,
} from "../Action/LaunchDataAction";

export const fetchLaunchData = () => {
  return async (dispatch, getState) => {
    dispatch(updateLaunchDataLoader(true));

    try {
      const response = await api.get("https://api.spacexdata.com/v3/launches");
      dispatch(updateLaunchData(response.data));
    } catch (error) {
      console.log(error.message);
    }
    dispatch(updateLaunchDataLoader(false));
  };
};

export const fetchFullLaunchDetails = () => {
  return async (dispatch, getState) => {
    dispatch(updateFullLaunchDetailsLoading(true));
    try {
      const { selectedLaunchDetail } = getState().LaunchDataReducer;
      const response = await api.get(
        `https://api.spacexdata.com/v3/launches/${selectedLaunchDetail.flight_number}`
      );
      dispatch(updateFullLaunchDetailsOfSelectedLaunch(response.data));
    } catch (error) {
      console.log("rocket data", error.message);
    }
    dispatch(updateFullLaunchDetailsLoading(false));
  };
};
