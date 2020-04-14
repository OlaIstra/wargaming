import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utils";

export const initialState = {
  tanks: [],
  selectedTank: null,
  loading: false,
  error: null
};

export const tanksReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TANKS_START:
      return updateObject(state, {
        loading: true,
        error: null
      });
    case actionTypes.FETCH_TANKS_SUCCESS:
      return updateObject(state, {
        loading: false,
        tanks: action.tanks,
        error: null
      });
    case actionTypes.FETCH_TANKS_FAIL:
      return updateObject(state, {
        loading: false,
        error: action.error
      });
    case actionTypes.SET_TANK:
      return updateObject(state, {
        selectedTank: action.selectedTank
      });
    default:
      return state;
  }
};
