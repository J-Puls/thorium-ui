import { validProps, updateJustify, makeTranslucent } from "../";
import config from "../../config";

const updateSize = (size) => {
  const rs = config.responsiveSizes;
  if (rs[size]) {
    return {
      flexBasis: `${rs[size]}%`,
      flexGrow: 0,
      maxWidth: `${rs[size]}%`,
    };
  } else return { display: "none" };
};

const updateBlock = (props, size) => {
  let mods = {};
  props[size] && (mods = { ...mods, ...updateSize(props[size]) });
  props.all && (mods = { ...mods, ...updateSize(props.all) });
  for (let key of validProps.modifiers.block) {
    if (props[key]) {
      key === "justify" &&
        (mods = { ...mods, ...updateJustify(props.justify) });
      key === "rounded" && (mods.borderRadius = ".25rem");
      key === "round" && (mods.borderRadius = "50%");
      key === "bg" && (mods.backgroundColor = props.bg);
      key === "translucent" &&
        (mods.backgroundColor = makeTranslucent(props.bg));
      key === "vertical" &&
        (mods = { ...mods, display: "flex", flexDirection: "column" });
    }
  }
  return mods;
};

const updateLayer = (props) => {
  let mods = {};
  for (let key of validProps.modifiers.layer) {
    if (props[key]) {
      key === "justify" &&
        (mods = { ...mods, ...updateJustify(props.justify) });
      key === "rounded" && (mods.borderRadius = "1rem");
      key === "bg" && (mods.backgroundColor = props.bg);
      key === "translucent" &&
        (mods.backgroundColor = makeTranslucent(props.bg));
      key === "sticky" &&
        (mods = { ...mods, position: "sticky", top: 0, zIndex: 1000 });
    }
  }
  return mods;
};
const updateImage = (props) => {
  let mods = {};
  for (let key of validProps.modifiers.image) {
    if (props[key]) {
      key === "fluid" && (mods = { ...mods, maxWidth: "100%", height: "auto" });
      key === "fluidHalf" &&
        (mods = { ...mods, maxWidth: "50%", height: "auto" });
      key === "rounded" && (mods.borderRadius = ".5rem");
      key === "round" && (mods.borderRadius = "50%");
    }
  }
  return mods;
};

/**
 *
 * @param {String} name Name of the component
 * @param props The React component "props" object
 * @param { String } size The current context viewport size name
 * @returns { Object } An object containing the result of the corresponding function
 */
export const updateFromProps = (name, props, size) => {
  const processes = {
    block: updateBlock(props, size),
    layer: updateLayer(props),
    image: updateImage(props),
  };

  return processes[name];
};
