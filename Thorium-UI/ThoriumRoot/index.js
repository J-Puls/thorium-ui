import React, { useState, useEffect } from "react";
import ThoriumContext from "./ThoriumContext";
import { themes } from "../Styles";

const ThoriumRoot = props => {

  // Set default theme via props
  let defaultTheme;
  (props['light']) && (defaultTheme = themes.light);
  (props['dark']) && (defaultTheme = themes.dark);

  // Grab the current viewport width (to be used for component style calculation)
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [viewportSizeName, setViewportSizeName] = useState("");

  /**
   * Setting the theme in ThoriumRoot allows us to access it from any component.
   *
   * Calling setTheme from any component easily allows the application theme to be
   * toggled between light and dark
   */
  const [theme, setTheme] = useState(defaultTheme);

  /**
   * Update the viewport size name when the browser is resized to set breakpoints
   * (to be used for component style calculation)
   *
   * Breakpoints:
   *    xs: < 576px
   *    sm: >= 576 && < 768
   *    md: >= 768 && < 992
   *    lg: >= 992 && < 1024
   *    xl: >= 1024 && < 1920
   *    fhd: > 1920
   */
  useEffect(() => {
    const w = viewportWidth;
    let val;
    if (w < 576) val = "xs";
    else if (w >= 576 && w < 768) val = "sm";
    else if (w >= 768 && w < 1024) val = "md";
    else if (w >= 1024 && w < 1920) val = "lg";
    else val = "xl";
    setViewportSizeName(val);
  }, [viewportWidth]);

  // Update viewport width state when the browser is resized
  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    console.log("listener set");
  }, []);

  // Context to be accessable by all components
  const context = {
    viewportWidth,
    viewportSizeName,
    theme,
    setTheme,
    themes
  };

  /**
   * Body element resides outside of the ThoriumRoot component, so we must
   * explicitly update it when the theme is changed.
   *
   * The value comes from a JSON object, so we must first format it to valid CSS syntax
   */
  useEffect(() => {
    const quotesAndBraces = /[\"\{\}]/g;
    const commas = /[\,]/g;
    document.body.style.cssText =
      JSON.stringify(theme.body)
        .replace(quotesAndBraces, " ")
        .replace(commas, ";")
        .trim() + ";";
  }, [theme]);
  return (
    <ThoriumContext.Provider value={context}>
      <thor-root className="thorium-root" style={{ boxSizing: "border-box" }}>
        {props.children}
      </thor-root>
    </ThoriumContext.Provider>
  );
};

export default ThoriumRoot;
