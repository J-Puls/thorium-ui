import { updateJustify, makeBGTranslucent } from "../ThoriumUtils";

export const updateFromProps = props => {
  let updated = {};
  // Dynamically update the style based on given props
  props.justify && (updated = { ...updated, ...updateJustify(props.justify) });

  props.rounded && (updated.borderRadius = ".25rem");

  props.bg && (updated.backgroundColor = props.bg);

  props.translucent && (updated.backgroundColor = makeBGTranslucent(props.bg));

  props.sticky &&
    (updated = { ...updated, position: "sticky", top: 0, zIndex: 1000 });

  return updated;
};
