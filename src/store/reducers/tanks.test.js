import { tanksReducer, initialState } from "./tanks";
import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utils";

describe("tanks reducer", () => {
  it("should return initial state", () => {
    expect(tanksReducer(initialState, {})).toEqual(
      updateObject(initialState, {})
    );
  });

  it("should start loading", () => {
    const action = {
      type: actionTypes.FETCH_TANKS_START
    };

    expect(tanksReducer(initialState, action)).toEqual(
      updateObject(initialState, { loading: true })
    );
  });

  it("should store the array of tanks", () => {
    const action = {
      type: actionTypes.FETCH_TANKS_SUCCESS,
      tanks: [1, 2, 3]
    };

    expect(
      tanksReducer(
        {
          ...initialState,
          loading: true
        },
        action
      )
    ).toEqual(updateObject(initialState, { tanks: [1, 2, 3] }));
  });

  it("should store error", () => {
    const action = {
      type: actionTypes.FETCH_TANKS_FAIL,
      error: "error"
    };
    expect(
      tanksReducer(
        {
          ...initialState,
          loading: true
        },
        action
      )
    ).toEqual(updateObject(initialState, { error: "error" }));
  });

  it("should store the selected tank", () => {
    const action = {
      type: actionTypes.SET_TANK,
      selectedTank: { name: "tank", country: "uk" }
    };
    expect(tanksReducer(initialState, action)).toEqual(
      updateObject(initialState, {
        selectedTank: { name: "tank", country: "uk" }
      })
    );
  });
});
