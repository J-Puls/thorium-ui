import React from "react";
import { Code } from "../";
import { ThoriumProvider } from "../ThoriumContext";
import { render } from "@testing-library/react";
import themes from "../Themes";
import { colors } from "../Themes/colors";
import { hexToRGB } from "../ThoriumUtils";

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
