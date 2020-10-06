import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Block } from "../components/Block";
import { responsiveSizes } from "../config";

it("renders the correct element", () => {
  const { getByTestId } = render(<Block />);
  expect(getByTestId("th-block")).toBeInTheDocument();
});

it("renders with responsive width", () => {
  for (const key in responsiveSizes) {
    const { container } = render(<Block all={parseInt(key)} />);
    expect(parseFloat(container.firstElementChild.style.maxWidth)).toBe(
      responsiveSizes[key]
    );
  }
});

it("overrides size if 'all' is passed", () => {
  for (const key in responsiveSizes) {
    const { container } = render(<Block xs={12} all={parseInt(key)} />);
    expect(parseFloat(container.firstElementChild.style.maxWidth)).toBe(
      responsiveSizes[key]
    );
  }
});

it("renders its children correctly", () => {
  const { container } = render(
    <Block>
      <div />
    </Block>
  );
  expect(container.children.length).toBe(1);
});
