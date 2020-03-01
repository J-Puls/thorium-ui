export const updateLayerStyle = (props, sty, set) => {
  const styCopy = sty;
  const justify = props.justify;
  switch (justify) {
    case "start":
      styCopy.justifyContent = "flex-start";
      break;
    case "center":
      styCopy.justifyContent = "center";
      break;
    case "end":
      styCopy.justifyContent = "flex-end";
      break;
    case "between":
      styCopy.justifyContent = "space-between";
      break;
    case "around":
      styCopy.justifyContent = "space-around";
      break;
  }

  if (props.height) styCopy.height = props.height;
};
