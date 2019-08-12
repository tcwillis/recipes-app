import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

describe("Header", () => {
  it("renders without crashing", () => {
    shallow(<Header />);
  });
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it("should render a header", () => {
    expect(wrapper.find(".nav").length).toEqual(1);
  });
});
