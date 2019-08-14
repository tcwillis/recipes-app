import reducer from "./recipesReducer";
import {
  RECIPES_RECEIVED,
  RECIPES_FAILED,
  RECIPES_REQUESTED
} from "../actionTypes";
import { transformRecipes } from "../../utils/transform";

describe("Recipes reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      list: [],
      error: null,
      isFetchingData: false
    });
  });

  it("should handle RECIPES_RECEIVED", () => {
    const mockResponse = {
      contents: [{ contentId: 123, title: "An article" }]
    };
    expect(
      reducer(undefined, {
        type: RECIPES_RECEIVED,
        payload: mockResponse
      })
    ).toEqual({
      list: transformRecipes(mockResponse),
      error: null,
      isFetchingData: false
    });
  });

  it("should handle RECIPES_FAILED", () => {
    expect(
      reducer(undefined, {
        type: RECIPES_FAILED,
        payload: "Failed to fetch"
      })
    ).toEqual({
      isFetchingData: false,
      error: "Failed to fetch",
      list: []
    });
  });
  it("should handle RECIPES_REQUESTED", () => {
    expect(
      reducer(undefined, {
        type: RECIPES_REQUESTED
      })
    ).toEqual({
      isFetchingData: true,
      error: null,
      list: []
    });
  });
});
