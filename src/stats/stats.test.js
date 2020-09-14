import React from "react";
import { render, screen } from "@testing-library/react";
import Stats from "./stats";

test("should render provided value", () => {
  const { getByText } = render(<Stats label="" value={10} />);
  const valueElement = getByText("10");
  expect(valueElement).toBeInTheDocument();
});

test("should render provided label", () => {
  const { getByText } = render(<Stats label="hello" value={0} />);
  const labelElement = getByText("hello");
  expect(labelElement).toBeInTheDocument();

  screen.debug();
});

test("should render provided change", () => {
  const { getByText } = render(<Stats label="" value={0} change={-20} />);
  const changeElement = getByText(/20/i);
  expect(changeElement).toBeInTheDocument();
});

test("should render &#8600; for negative change", () => {
  const { getByText } = render(<Stats label="" value={0} change={-20} />);
  const changeElement = getByText(/↘/i);
  expect(changeElement).toBeInTheDocument();
});

test("should render &#8598; for positive change", () => {
  const { getByText } = render(<Stats label="" value={0} change={20} />);
  const changeElement = getByText(/↖/i);
  expect(changeElement).toBeInTheDocument();
});
