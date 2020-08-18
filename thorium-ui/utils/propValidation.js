/**
 * Defines various valid prop values (for use in PropTypes)
 */
export const validProps = {
  justify: ["around", "between", "center", "end", "evenly", "start"],
  sizes: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  modifiers: {
    block: ["justify", "rounded", "round", "bg", "translucent", "vertical"],
    layer: ["justify", "rounded", "bg", "translucent", "sticky"],
    image: ["fluid", "fluidHalf", "rounded", "round"],
  },
  variants: [
    "danger",
    "dark",
    "light",
    "link",
    "primary",
    "secondary",
    "success",
    "warning",
  ],
};

export default validProps;
