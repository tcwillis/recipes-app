import configureMockStore from "redux-mock-store";
import middlewares from "../middleware";
import { fetchRecipesIfNeeded } from "./recipesActions";
import { RECIPES_REQUESTED } from "../actionTypes";

const mockStore = configureMockStore(middlewares);

describe("Recipes actions", () => {
  it("should dispatch a REQUEST if there are no recipes in the store", () => {
    const expectedActions = [{ type: RECIPES_REQUESTED }];
    const store = mockStore({ recipes: { list: [] } });
    store.dispatch(fetchRecipesIfNeeded());

    expect(store.getActions()).toEqual(expectedActions);
  });

  it("should not dispatch a REQUEST if a fetch is in progress", () => {
    const store = mockStore({
      recipes: { isFetchingData: true, list: [{ id: 1 }] }
    });
    store.dispatch(fetchRecipesIfNeeded());

    expect(store.getActions()).toEqual([]);
  });

  it("should not dispatch a REQUEST if recipes are in the store", () => {
    const store = mockStore({
      recipes: { isFetchingData: false, list: [{ id: 1 }] }
    });
    store.dispatch(fetchRecipesIfNeeded());

    expect(store.getActions()).toEqual([]);
  });
});
