import { updateJustify, makeTranslucent } from "../ThoriumUtils";

// Update the Layer style when breakpoints are reached
export const updateFromProps = (props) => {
  let mods = {};
  const validModifiers = ["justify", "rounded", "bg", "translucent", "sticky"];
  // Check for valid modifiers and add styles accordingly
  for (let key of validModifiers) {
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
