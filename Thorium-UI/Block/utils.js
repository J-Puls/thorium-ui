import { updateJustify, makeTranslucent } from "../ThoriumUtils";

// Update component width based on viewport size
const updateSize = (size) => {
  const vals = {
    "12": 100,
    "11": 91.666667,
    "10": 83.333333,
    "9": 75,
    "8": 66.666667,
    "7": 58.333333,
    "6": 50,
    "5": 41.666667,
    "4": 33.333333,
    "3": 25,
    "2": 16.666667,
    "1": 8.333333,
  };
  if (vals[size]) {
    return {
      flexGrow: 0,
      flexBasis: `${vals[size]}%`,
      maxWidth: `${vals[size]}%`,
    };
  } else return { display: "none" };
};

// Update the block style when breakpoints are reached
export const updateFromProps = (props, size) => {
  let mods = {};
  const validModifiers = [
    "justify",
    "rounded",
    "round",
    "bg",
    "translucent",
    "vertical",
  ];

  // Dynamically update the style if a 'size' prop is given
  props[size] && (mods = { ...mods, ...updateSize(props[size]) });
  props.all && (mods = { ...mods, ...updateSize(props.all) });

  // Check for valid modifiers and add styles accordingly
  for (let key of validModifiers) {
    if (props[key]) {
      key === "justify" &&
        (mods = { ...mods, ...updateJustify(props.justify) });
      key === "rounded" && (mods.borderRadius = "1rem");
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
