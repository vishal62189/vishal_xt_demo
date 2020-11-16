import axios from "axios";
import { baseUrl, pagelimit } from "../constants";

export const FETCH_MISSIONS = "FETCH_MISSIONS";

export const fetchMissions = (filterParam = "") => async (dispatch) => {
  let url = `${baseUrl}?limit=${pagelimit}${filterParam.slice(1)}`;

  const res = await axios.get(url);

  const formatData = () => {
    return res.data.map((launch) => ({
      missionId: launch.mission_id,
      launchYear: launch.launch_year,
      launchSuccess: launch.launch_success ? "Success" : "Fail",
      landSuccess: launch.rocket.first_stage.cores[0].land_success ? "Success" : "Fail",
      missionName: launch.mission_name,
      flightNumber: launch.flight_number,
      missionPatch: launch.links.mission_patch_small
        ? launch.links.mission_patch_small
        : null,
    }));
  };


  dispatch({
    type: FETCH_MISSIONS,
    payload: formatData(),
  });
};
