import React from "react";
import { Code } from "../";
import { ThoriumConsumer } from "../ThoriumContext";
import { render } from "@testing-library/react";
import Themes from "../Themes";

it("renders correctly", () => {
  const { container, getByTestId } = render(
    <Code style={{ backgroundColor: Themes.dark.codeblock.backgroundColor }}>
      test
    </Code>
  );
  expect(getByTestId("code").toBeInTheDocument());
});
