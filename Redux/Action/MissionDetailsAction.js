import {
  UPDATE_MISSION_DATA,
  UPDATE_MISSION_DATA_LOADER,
} from "../../Constants/ReduxConstants";

export const updateMissionData = (missionData) => {
  return {
    type: UPDATE_MISSION_DATA,
    missionData,
  };
};
export const updateMissionDataLoader = (boolVal) => {
  return {
    type: UPDATE_MISSION_DATA_LOADER,
    boolVal,
  };
};
