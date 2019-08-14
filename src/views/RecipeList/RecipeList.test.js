import React from "react";
import { RecipeList } from "./RecipeList";
import { shallow } from "enzyme";

describe("<RecipeList />", () => {
  it("should render without props", () => {
    shallow(<RecipeList />);
  });

  it("should display a title", () => {
    const wrapper = shallow(<RecipeList />);
    expect(wrapper.find("h1").text()).toEqual("Recipes");
  });

  it("should display a fetching message", () => {
    const wrapper = shallow(<RecipeList isFetching={true} />);
    expect(wrapper.find("[data-ref='fetching']").length).toEqual(1);
  });

  it("should display a list of recipes", () => {
    const recipes = [{ id: 1 }, { id: 2 }];
    const wrapper = shallow(<RecipeList recipes={recipes} />);
    expect(wrapper.find("Tile").length).toEqual(2);
  });
});
