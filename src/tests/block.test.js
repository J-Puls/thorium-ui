import React from "react";
import { render } from "@testing-library/react";
import { Block } from "../components/Block";
import { config } from "../config";

it("renders correctly", () => {
  const { container, getByTestId } = render(<Block />);
  expect(getByTestId("block")).toBeInTheDocument();
});

it("renders with responsive width", () => {
  for (let key in config.responsiveSizes) {
    const { container } = render(<Block all={parseInt(key)} />);
    expect(parseFloat(container.firstElementChild.style.maxWidth)).toBe(
      config.responsiveSizes[key]
    );
  }
});

it("overrides size if 'all' is passed", () => {
  for (let key in config.responsiveSizes) {
    const { container } = render(<Block xs={12} all={parseInt(key)} />);
    expect(parseFloat(container.firstElementChild.style.maxWidth)).toBe(
      config.responsiveSizes[key]
    );
  }
});

it("renders its children correctly", () => {
  const { container, getByTestId } = render(
    <Block>
      <div></div>
    </Block>
  );
  expect(getByTestId("block").children.length).toBeTruthy();
});
