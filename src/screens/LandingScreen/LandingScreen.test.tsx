import React from "react";
import { render } from "@testing-library/react-native";

import LandingScreen from "./LandingScreen";

describe("Landing Screen", () => {
  it("renders correctly", () => {
    const tree = render(<LandingScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
