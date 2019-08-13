import configureMockStore from "redux-mock-store";
import * as actions from "./recipesActions";
import * as types from "../actionTypes";
import recipesMock from "../../mocks/recipes.json";
import middlewares from "../middleware";
import axios from "axios";
import sinon from "sinon";

const mockStore = configureMockStore(middlewares);

describe("Recipe Actions", () => {
  const sandbox = sinon.createSandbox();
  afterEach(() => {
    sandbox.restore();
  });

  it("should dispatch the relevane actions once fetching recipes has been done", () => {
    const resolved = new Promise(r => r({ data: recipesMock }));
    sandbox.stub(axios, "request").returns(resolved);

    const expectedActions = [
      {
        type: types.API,
        payload: {
          url: "/recipes",
          method: "GET",
          data: null,
          onSuccess: actions.setRecipes,
          label: types.FETCH_RECIPES,
          headersOverride: null
        }
      },
      { type: types.API_START, payload: types.FETCH_RECIPES },
      { type: types.SET_RECIPES, payload: { recipes: recipesMock } },
      { type: types.API_END, payload: types.FETCH_RECIPES }
    ];

    const store = mockStore({ todos: [] });

    return store.dispatch(actions.getRecipes()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
