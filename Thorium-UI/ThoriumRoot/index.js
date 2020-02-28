import React, { useState, useEffect } from "react";
import ThoriumContext from "./ThoriumContext";
import { themes } from "../Styles";

const ThoriumRoot = props => {
  // Grab the current viewport width (to be used for component style calculation)
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [viewportSizeName, setViewportSizeName] = useState("");

  /**
   * Setting the theme in ThoriumRoot allows us to access it from any component.
   * 
   * Calling setTheme from any component easily allows the application theme to be
   * toggled between light and dark
   */
  const [theme, setTheme] = useState(themes.dark);

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
    else if (w >= 768 && w < 992) val = "md";
    else if (w >= 992 && w < 1024) val = "lg";
    else if (w >= 1024 && w < 1920) val = "xl";
    else val = "fhd";
    setViewportSizeName(val);
  }, [viewportWidth]);

  // Update viewport width state when the browser is resized
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setViewportWidth(width);
    };
    window.addEventListener("resize", handleResize);
  });

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
      <div className="thorium-root" style={{ boxSizing: "border-box" }}>
        {props.children}
      </div>
    </ThoriumContext.Provider>
  );
};

export default ThoriumRoot;
