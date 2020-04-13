import * as actionTypes from "./actionTypes";
import axios from "../../shared/axios";

export const fetchTanksStart = () => {
  return {
    type: actionTypes.FETCH_TANKS_START
  };
};

export const fetchTanksSuccess = tanks => {
  return {
    type: actionTypes.FETCH_TANKS_SUCCESS,
    tanks: tanks
  };
};

export const fetchTanksFail = error => {
  return {
    type: actionTypes.FETCH_TANKS_FAIL,
    error: error
  };
};

export const setTank = selectedTank => {
  return {
    type: actionTypes.SET_TANK,
    selectedTank: selectedTank
  };
};

export const fetchTanks = () => {
  return dispatch => {
    dispatch(fetchTanksStart());
    axios
      .get()
      .then(res => {
        dispatch(fetchTanksSuccess(res.data));
      })
      .catch(error => {
        dispatch(fetchTanksFail(error));
      });
  };
};
