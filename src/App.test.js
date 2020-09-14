import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders the header", () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/react exercises/i);
  expect(headerElement).toBeInTheDocument();
});
