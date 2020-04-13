import { tanksReducer } from "./tanks";
import * as actionTypes from "../actions/actionTypes";

describe("tanks reducer", () => {
  it("should return initial state", () => {
    expect(tanksReducer(undefined, {})).toEqual({
      tanks: [],
      selectedTank: null,
      loading: false,
      error: null
    });
  });

  it("should start loading", () => {
    expect(
      tanksReducer(
        {
          tanks: [],
          selectedTank: null,
          loading: false,
          error: null
        },
        { type: actionTypes.FETCH_TANKS_START, loading: true }
      )
    ).toEqual({
      tanks: [],
      selectedTank: null,
      loading: true,
      error: null
    });
  });

  it("should store the array of tanks", () => {
    expect(
      tanksReducer(
        {
          tanks: [],
          selectedTank: null,
          loading: false,
          error: null
        },
        { type: actionTypes.FETCH_TANKS_SUCCESS, tanks: [1, 2, 3] }
      )
    ).toEqual({
      tanks: [1, 2, 3],
      selectedTank: null,
      loading: false,
      error: null
    });
  });

  it("should store error", () => {
    expect(
      tanksReducer(
        {
          tanks: [],
          selectedTank: null,
          loading: false,
          error: null
        },
        { type: actionTypes.FETCH_TANKS_FAIL, error: "error" }
      )
    ).toEqual({
      tanks: [],
      selectedTank: null,
      loading: false,
      error: "error"
    });
  });

  it("should store the selected tank", () => {
    expect(
      tanksReducer(
        {
          tanks: [],
          selectedTank: null,
          loading: false,
          error: null
        },
        {
          type: actionTypes.SET_TANK,
          selectedTank: { name: "tank", country: "uk" }
        }
      )
    ).toEqual({
      tanks: [],
      selectedTank: { name: "tank", country: "uk" },
      loading: false,
      error: null
    });
  });
});
