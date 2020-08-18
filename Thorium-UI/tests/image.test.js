import React from "react";
import { Picture } from "../components/Picture";
import { render } from "@testing-library/react";
import testImg from "./test-image.jpg";
import { pictureStyle as ps } from "../styles";

it("renders correctly", () => {
  const { container, getByTestId } = render(<Picture src={testImg} />);
  expect(getByTestId("image")).toBeInTheDocument();
});

it("responds to fluid", () => {
  const { container, getByTestId } = render(
    <div style={{ width: "100px" }}>
      <Picture src={testImg} fluid />
    </div>
  );
  expect(getByTestId("image").style.maxWidth).toBe(ps.fluid.maxWidth);
});

it("responds to fluidHalf", () => {
  const { container, getByTestId } = render(
    <div style={{ width: "100px" }}>
      <Picture src={testImg} fluidHalf />
    </div>
  );
  expect(getByTestId("image").style.maxWidth).toBe(ps.fluidHalf.maxWidth);
});

it("responds to round", () => {
  const { container, getByTestId } = render(<Picture src={testImg} round />);
  expect(getByTestId("image").style.borderRadius).toBe(ps.round.borderRadius);
});

it("responds to rounded", () => {
  const { container, getByTestId } = render(<Picture src={testImg} rounded />);
  expect(getByTestId("image").style.borderRadius).toBe(ps.rounded.borderRadius);
});
