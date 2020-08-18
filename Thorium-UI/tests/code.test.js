import React from "react";
import { Code } from "../components/Code";
import { ThoriumProvider } from "../context/ThoriumContext";
import { render } from "@testing-library/react";
import themes, { colors } from "../themes";
import { hexToRGB } from "../utils";

const context = { theme: themes.dark };
it("renders correctly", () => {
  const { container, getByTestId } = render(
    <ThoriumProvider value={context}>
      <Code>test</Code>;
    </ThoriumProvider>
  );
  expect(getByTestId("code")).toBeInTheDocument();
  expect(getByTestId("code").style["background-color"]).toBe(
    hexToRGB(colors.neutral.b1).cssString
  );
  expect(getByTestId("code").style.color).toBe(
    hexToRGB(context.theme.colors.secondary).cssString
  );
});
