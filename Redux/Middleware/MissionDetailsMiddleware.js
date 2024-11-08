import api from "../../axiosAdaptor";
import {
  updateMissionData,
  updateMissionDataLoader,
} from "../Action/MissionDetailsAction";

export const fetchMissionData = () => {
  return async (dispatch, getState) => {
    dispatch(updateMissionDataLoader(true));
    try {
      const { selectedLaunchDetail } = getState().LaunchDataReducer;
      if (selectedLaunchDetail.mission_id.length > 0) {
        const response = await api.get(
          `https://api.spacexdata.com/v3/missions/${selectedLaunchDetail.mission_id[0]}`
        );
        dispatch(updateMissionData(response.data));
      } else {
        dispatch(updateMissionData(null));
      }
    } catch (error) {
      console.log("Mission Data", error.message);
    }
    dispatch(updateMissionDataLoader(false));
  };
};
