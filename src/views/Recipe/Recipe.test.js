import React from "react";
import Recipe from "./index";
import { shallow } from "enzyme";

describe("<Recipes />", () => {
  it("should render without props", () => {
    shallow(<Recipe />);
  });

  it("should display a title", () => {
    const wrapper = shallow(<Recipe />);
    expect(wrapper.find("h1").text()).toEqual("Recipe");
  });

  it("should display a link to go back to recipes", () => {
    const wrapper = shallow(<Recipe />);
    expect(wrapper.find("Link").props().to).toEqual("/recipes");
  });
});
