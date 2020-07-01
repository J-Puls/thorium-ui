import React from "react";
import { Image } from "../";
import { render } from "@testing-library/react";
import testImg from "./test-image.jpg";
import { imageStyle as imgSty } from "../Styles";

it("renders correctly", () => {
  const { container, getByTestId } = render(<Image src={testImg} />);
  expect(getByTestId("image")).toBeInTheDocument();
});

it("responds to fluid", () => {
  const { container, getByTestId } = render(
    <div style={{ width: "100px" }}>
      <Image src={testImg} fluid />
    </div>
  );
  expect(getByTestId("image").style.maxWidth).toBe(imgSty.fluid.maxWidth);
});

it("responds to fluidHalf", () => {
  const { container, getByTestId } = render(
    <div style={{ width: "100px" }}>
      <Image src={testImg} fluidHalf />
    </div>
  );
  expect(getByTestId("image").style.maxWidth).toBe(imgSty.fluidHalf.maxWidth);
});

it("responds to round", () => {
  const { container, getByTestId } = render(<Image src={testImg} round />);
  expect(getByTestId("image").style.borderRadius).toBe(
    imgSty.round.borderRadius
  );
});

it("responds to rounded", () => {
  const { container, getByTestId } = render(<Image src={testImg} rounded />);
  expect(getByTestId("image").style.borderRadius).toBe(
    imgSty.rounded.borderRadius
  );
});
