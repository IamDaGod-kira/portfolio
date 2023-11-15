import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

it("should render the App component", () => {
  const { getByText } = render(<App />);
  expect(getByText("Pritam Santra")).toBeInTheDocument();
});