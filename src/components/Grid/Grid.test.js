import React from "react";
import { shallow } from "enzyme";
import List from "./index";
const mockResponse = require("../../mocks/properties.json").body;

describe("List", () => {
  it("renders without crashing", () => {
    shallow(<List />);
  });

  describe("List with items passed", () => {
    let list;
    const buttonActionStub = jest.fn();
    const props = {
      buttonAction: buttonActionStub,
      items: mockResponse.results,
      title: "Results"
    };

    beforeEach(() => {
      list = shallow(<List {...props} />);
    });

    it("should render the correct number of list items", () => {
      expect(list.find('[data-ref="list-item"]').length).toEqual(3);
    });

    it("should pass the correct props to each list item", () => {
      const listItems = list.find("Item");
      const expectedItems = mockResponse.results.map(item => {
        return {
          id: item.id,
          onClick: buttonActionStub,
          logo: item.agency.logo,
          color: item.agency.brandingColors.primary,
          price: item.price,
          image: item.mainImage,
          buttonLabel: "add property",
          saved: false
        };
      });
      listItems.forEach((item, index) => {
        expect(item.props()).toEqual(expectedItems[index]);
      });
    });
  });
});
