import recipesReducer from "./recipesReducer";
import * as types from "../actionTypes";

describe("Recipes reducer", () => {
  it("should return the initial state", () => {
    expect(recipesReducer(undefined, {})).toEqual({
      list: [],
      error: null,
      isFetchingData: null
    });
  });

  it("should handle SET_RECIPES", () => {
    expect(
      recipesReducer(undefined, {
        type: types.SET_RECIPES,
        payload: ["recipe1"]
      })
    ).toEqual({
      list: ["recipe1"],
      error: null,
      isFetchingData: null
    });
  });
});
