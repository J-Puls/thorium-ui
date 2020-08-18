import React from "react";
import { Button } from "../components/Button";
import { render } from "@testing-library/react";
import { ThoriumProvider } from "../context/ThoriumContext";
import themes from "../themes";
import { buttonStyle } from "../styles";
import { hexToRGB } from "../utils";

const context = { theme: themes.dark };
it("renders correctly", () => {
  const { container, getByTestId } = render(
    <ThoriumProvider value={context}>
      <Button>test</Button>;
    </ThoriumProvider>
  );
  expect(getByTestId("button")).toBeInTheDocument();
  expect(getByTestId("button").nodeName).toBe("BUTTON");
  expect(getByTestId("button").style["background-color"]).toBe(
    hexToRGB(context.theme.colors.primary).cssString
  );
});

it("responds to styling props", () => {
  const { container, getByTestId } = render(
    <ThoriumProvider value={context}>
      <Button variant="secondary" stretch>
        test
      </Button>
      ;
    </ThoriumProvider>
  );
  expect(getByTestId("button").style["background-color"]).toBe(
    hexToRGB(context.theme.colors.secondary).cssString
  );
  expect(container.firstElementChild.style.width).toBe("100%");
});

it("responds to size prop", () => {
  ["sm", "normal", "lg"].forEach((size) => {
    const { container, getByText } = render(
      <ThoriumProvider value={context}>
        <Button size={size}>{size}</Button>;
      </ThoriumProvider>
    );
    Object.entries(buttonStyle[size]).forEach((item) => {
      expect(getByText(size).style[item[0]]).toBe(item[1]);
    });
  });
});
