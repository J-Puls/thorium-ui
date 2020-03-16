export const updateFromProps = props => {
  let updated = {};

  if (props["fluid"]) {
    updated.maxWidth = "100%";
    updated.height = "auto";
  } else if (props["fluidHalf"]) {
    updated.maxWidth = "50%";
    updated.height = "auto";
  }
  if (props["rounded"]) {
    updated.borderRadius = ".5rem";
  } else if (props["round"]) {
    updated.borderRadius = "50%";
  }

  return updated;
};
