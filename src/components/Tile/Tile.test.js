import React from "react";
import { shallow } from "enzyme";
import Tile from "./index";

describe("Tile", () => {
  it("renders without props", () => {
    shallow(<Tile />);
  });
  let tile;
  const defaultProps = {
    id: "1",
    mobileImage: "http://images.com.au/image.gif",
    desktopImage: "http://images.com.au/image.gif"
  };

  beforeEach(() => {
    tile = shallow(<Tile {...defaultProps} />);
  });

  // it("should show the destkop image", () => {
  //   const itemImage = item.find('[data-ref="item-image"]');
  //   expect(itemImage.length).toEqual(1);
  //   expect(itemImage.prop("src")).toEqual(defaultProps.image);
  // });

  // it("should show the price", () => {
  //   const itemPrice = item.find('[data-ref="item-price"]');
  //   expect(itemPrice.length).toEqual(1);
  //   expect(itemPrice.text()).toEqual(defaultProps.price);
  // });

  // it("should call onClick when the button is clicked", () => {
  //   const itemButton = item.find('[data-ref="item-button"]');
  //   expect(itemButton.length).toEqual(1);
  //   itemButton.simulate("click");
  //   expect(buttonClickStub.mock.calls.length).toBe(1);
  //   expect(buttonClickStub.mock.calls[0][0]).toBe("1");
  // });

  // it("should not show a button if the saved flag is 'true'", () => {
  //   const savedItem = shallow(<Item {...defaultProps} saved={true} />);
  //   expect(savedItem.find('[data-ref="item-button"]').length).toEqual(0);
  //   expect(savedItem.props().className).toEqual("item saved");
  // });
});
