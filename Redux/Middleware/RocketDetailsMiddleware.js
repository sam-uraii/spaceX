import api from "../../axiosAdaptor";
import {
  updateRocketData,
  updateRocketDataLoader,
} from "../Action/RocketDetailsAction";

export const fetchRocketData = () => {
  return async (dispatch, getState) => {
    dispatch(updateRocketDataLoader(true));

    try {
      const { selectedLaunchDetail } = getState().LaunchDataReducer;
      console.log(selectedLaunchDetail);

      const response = await api.get(
        `https://api.spacexdata.com/v3/rockets/${selectedLaunchDetail.rocket.rocket_id}`
      );
      dispatch(updateRocketData(response.data));
    } catch (error) {
      console.log("rocket data", error.message);
    }
    dispatch(updateRocketDataLoader(false));
  };
};
