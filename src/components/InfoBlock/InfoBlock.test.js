import React from "react";
import { Provider } from "react-redux";
import Enzyme, { mount } from "enzyme";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { InfoBlock } from "./InfoBlock";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureMockStore([thunk]);

describe("InfoBlock", () => {
  let wrapper;

  beforeEach(() => {
    const store = mockStore({
      tanks: { selectedTank: { name: "tank", country: "uk" } }
    });
    wrapper = mount(
      <Provider store={store}>
        <InfoBlock />
      </Provider>
    );
  });

  it("ImageBlock is mounted", () => {
    expect(wrapper.find("p")).toHaveLength(2);
  });

  it("should render an ImageBlock component with 2 'p'-elements if recieved selectedTank from state", () => {
    expect(
      wrapper
        .find("p")
        .first()
        .text()
    ).toEqual("tank");
    expect(
      wrapper
        .find("p")
        .at(1)
        .text()
    ).toEqual("uk");
  });

  it("should render an ImageBlock component with text 'Please select tank' if does not recieved selectedTank from state", () => {
    const store = mockStore({
      tanks: {}
    });
    const wrapper = mount(
      <Provider store={store}>
        <InfoBlock />
      </Provider>
    );
    expect(wrapper.find("p").text()).toEqual("Please select tank");
  });
});
