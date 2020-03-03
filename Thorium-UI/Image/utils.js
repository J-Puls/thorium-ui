export const updateFromProps = props => {
  let updated = {};

  if (props["fluid"]) {
    updated.maxWidth = "100%";
    updated.height = "auto";
  } else if (props["half"]) {
    updated.maxWidth = "50%";
    updated.height = "auto";
  }
  if (props["rounded"]) {
    updated.borderRadius = "1rem";
  } else if (props["round"]) {
    updated.borderRadius = "50%";
  }

  return updated;
};
