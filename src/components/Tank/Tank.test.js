import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Enzyme, { mount } from "enzyme";
import * as actions from "../../store/actions/index";
import { Tank } from "./Tank";
import { tanksReducer } from "../../store/reducers/tanks";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Tank", () => {
  let wrapper;
  let mockStore;
  beforeEach(() => {
    const getWrapper = (
      mockStore = createStore(tanksReducer, {
        selectedTank: {}
      })
    ) =>
      mount(
        <Provider store={mockStore}>
          <Tank />
        </Provider>
      );

    mockStore = createStore(tanksReducer, {
      selectedTank: {}
    });
    mockStore.dispatch = jest.fn();
    wrapper = getWrapper(mockStore);
  });

  it("tank is mounted", () => {
    expect(wrapper.find("p")).toHaveLength(1);
    expect(wrapper.find("div")).toHaveLength(2);
    expect(wrapper.find("img")).toHaveLength(1);
  });

  it("should dispatch action 'setTank' onClick", () => {
    wrapper
      .find("div")
      .first()
      .simulate("click");
    expect(mockStore.dispatch).toHaveBeenCalledWith(actions.setTank({}));
  });
});
