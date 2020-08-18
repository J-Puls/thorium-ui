import React from "react";
import Container from "../components/Container";
import { render } from "@testing-library/react";
import config from "../config";

it("renders correctly", () => {
  const { container, getByTestId } = render(<Container />);
  expect(getByTestId("container")).toBeInTheDocument();
});

it("responds to breakpoints", () => {
  const breakpoints = {
    xs: 575,
    sm: 700,
    md: 1024,
    lg: 1366,
    xl: 1920,
  };
  Object.entries(breakpoints).forEach((entry) => {
    const { container } = render(
      <Container
        style={{ maxWidth: entry[1] / config.containerSizes[entry[0]] }}
      />
    );
    expect(parseFloat(container.firstElementChild.style.maxWidth)).toBe(
      entry[1] / config.containerSizes[entry[0]]
    );
  });
});

it("renders its children correctly", () => {
  const { container, getByTestId } = render(
    <Container>
      <div></div>
    </Container>
  );
  expect(getByTestId("container").children.length).toBeTruthy();
});
