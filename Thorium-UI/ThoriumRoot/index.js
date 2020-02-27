import React, { useState, useEffect } from "react";
import ThoriumContext from "./ThoriumContext";
import { themes } from "../Styles";

const ThoriumRoot = props => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [viewportSizeName, setViewportSizeName] = useState("");
  const [theme, setTheme] = useState(themes.dark);
  useEffect(() => {
    const w = viewportWidth;
    let val;
    if (w < 576) val = "xs";
    else if (w >= 576 && w < 768) val = "sm";
    else if (w >= 768 && w < 992) val = "md";
    else if (w >= 922 && w < 1024) val = "lg";
    else if (w >= 1024 && w < 1920) val = "xl";
    else val = "fhd";
    setViewportSizeName(val);
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setViewportWidth(width);
    };
    window.addEventListener("resize", handleResize);
  });
  const testFunc = message => alert(message);
  const context = {
    viewportWidth,
    viewportSizeName,
    theme,
    setTheme,
    themes,
    testFunc
  };
  useEffect(() => {
    const quotes = /[\"\{\}]/g;
    const commas = /[\,]/g;
    document.body.style.cssText =
      JSON.stringify(theme.body)
        .replace(quotes, " ")
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
