import React from "react";
import { shallow } from "enzyme";
import Tile from "./index";

describe("Tile", () => {
  it("renders without props", () => {
    shallow(<Tile />);
  });

  let tile;

  const props = {
    id: "1",
    mobileImage: "http://images.com.au/mobile.gif",
    image: "http://images.com.au/image.gif",
    title: "My Title",
    shortUrl: "/my-url"
  };

  beforeEach(() => {
    tile = shallow(<Tile {...props} />);
  });

  it("should show the image", () => {
    const tileImage = tile.find('[data-ref="tile-image"] source');
    expect(tileImage.length).toEqual(1);
    expect(tileImage.prop("srcSet")).toEqual(props.image);
  });

  it("should show the mobile image", () => {
    const tileMobileImage = tile.find('[data-ref="tile-image"] img');
    expect(tileMobileImage.length).toEqual(1);
    expect(tileMobileImage.prop("src")).toEqual(props.mobileImage);
  });

  it("should show a link", () => {
    const tileLink = tile.find(".tile");
    expect(tileLink.prop("to")).toEqual(props.shortUrl);
  });

  it("should show a title", () => {
    const tileTitle = tile.find('[data-ref="tile-title"]');
    expect(tileTitle.text()).toEqual(props.title);
  });
});
