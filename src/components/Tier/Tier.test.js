import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { tanksReducer } from "../../store/reducers/tanks";
import { Tier } from "./Tier";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Tier", () => {
  let wrapper;
  let mockStore;
  beforeEach(() => {
    const getWrapper = (mockStore = createStore(tanksReducer, {})) =>
      mount(
        <Provider store={mockStore}>
          <Tier />
        </Provider>
      );

    mockStore = createStore(tanksReducer, {
      tier: "I"
    });
    mockStore.dispatch = jest.fn();
    wrapper = getWrapper(mockStore);
  });

  it("tier is mounted", () => {
    expect(wrapper.find("div")).toHaveLength(1);
  });
});
