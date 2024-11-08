import {
  UPDATE_ROCKET_DATA,
  UPDATE_ROCKET_DATA_LOADER,
} from "../../Constants/ReduxConstants";

export const updateRocketData = (rocketData) => {
  return {
    type: UPDATE_ROCKET_DATA,
    rocketData,
  };
};
export const updateRocketDataLoader = (boolVal) => {
  return {
    type: UPDATE_ROCKET_DATA_LOADER,
    boolVal,
  };
};
