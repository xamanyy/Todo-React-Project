import React from "react";
import Basic from "../Component/Header.js";

import Enzyme, { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

it("renders correctly enzyme", () => {
  const wrapper = shallow(<Basic />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
