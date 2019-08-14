import React from "react";
import { shallow } from "enzyme";
import Grid from "./index";

describe("Grid", () => {
  it("should render children items", () => {
    const grid = shallow(
      <Grid>
        <div className="child">A child</div>
        <div className="child">Another child</div>
      </Grid>
    );
    expect(grid.find(".child").length).toEqual(2);
  });
});
