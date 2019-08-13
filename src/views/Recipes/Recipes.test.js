import React from "react";
import { Recipes } from "./Recipes";
import { shallow } from "enzyme";

describe("<Recipes />", () => {
  it("should render without crashing", () => {
    shallow(<Recipes />);
  });

  it("should display a title", () => {
    const wrapper = shallow(<Recipes />);
    expect(wrapper.find("h1").text()).toEqual("Recipes");
  });

  it("should display a fetching message", () => {
    const wrapper = shallow(<Recipes isFetching={true} />);
    expect(wrapper.find("[data-ref='fetching']").length).toEqual(1);
  });
});
