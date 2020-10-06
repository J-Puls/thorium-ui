import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Container } from "../components/Container";
import { breakpoints, containerSizes } from "../config";

it("renders correctly", () => {
  const { getByTestId } = render(<Container />);
  expect(getByTestId("th-container")).toBeInTheDocument();
});

it("responds to breakpoints", () => {
  for (const breakpoint in breakpoints) {
    const { container } = render(
      <Container
        style={{
          maxWidth: breakpoints[breakpoint] / containerSizes[breakpoint]
        }}
      />
    );
    expect(parseFloat(container.firstElementChild.style.maxWidth)).toBe(
      breakpoints[breakpoint] / containerSizes[breakpoint]
    );
  }
});

it("renders its children correctly", () => {
  const { container } = render(
    <Container>
      <div />
    </Container>
  );
  expect(container.children.length).toBe(1);
});
