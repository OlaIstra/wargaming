import React from "react";
import Enzyme, { shallow } from "enzyme";
import { Image } from "./Image";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Image", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Image />);
  });

  it("image is mounted", () => {
    expect(wrapper.find("img")).toHaveLength(1);
  });

  it("should render Image", () => {
    wrapper.setProps({ name: "D1", country: "france" });
    expect(wrapper.find("img").props()["src"]).toEqual("france-D1.png");
  });
});
