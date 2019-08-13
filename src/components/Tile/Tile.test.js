import React from "react";
import { shallow } from "enzyme";
import Item from "./index";

it("renders without crashing", () => {
  shallow(<Item />);
});

describe("Item", () => {
  let item;
  const buttonClickStub = jest.fn();
  const defaultProps = {
    id: "1",
    price: "$553,000",
    color: "#fff",
    image: "http://images.com.au/image.gif",
    logo: "http://images.com.au/image.gif",
    onClick: buttonClickStub,
    buttonLabel: "Click it",
    saved: false
  };

  beforeEach(() => {
    item = shallow(<Item {...defaultProps} />);
  });

  it("should show the logo", () => {
    expect(item.find('[data-ref="item-logo"]').length).toEqual(1);
  });

  it("should show a title with the correct background colour", () => {
    const itemTitle = item.find('[data-ref="item-title"]');
    expect(itemTitle.length).toEqual(1);
    expect(itemTitle.prop("style")).toEqual({
      backgroundColor: defaultProps.color
    });
  });

  it("should show the image", () => {
    const itemImage = item.find('[data-ref="item-image"]');
    expect(itemImage.length).toEqual(1);
    expect(itemImage.prop("src")).toEqual(defaultProps.image);
  });

  it("should show the price", () => {
    const itemPrice = item.find('[data-ref="item-price"]');
    expect(itemPrice.length).toEqual(1);
    expect(itemPrice.text()).toEqual(defaultProps.price);
  });

  it("should call onClick when the button is clicked", () => {
    const itemButton = item.find('[data-ref="item-button"]');
    expect(itemButton.length).toEqual(1);
    itemButton.simulate("click");
    expect(buttonClickStub.mock.calls.length).toBe(1);
    expect(buttonClickStub.mock.calls[0][0]).toBe("1");
  });

  it("should not show a button if the saved flag is 'true'", () => {
    const savedItem = shallow(<Item {...defaultProps} saved={true} />);
    expect(savedItem.find('[data-ref="item-button"]').length).toEqual(0);
    expect(savedItem.props().className).toEqual("item saved");
  });
});
