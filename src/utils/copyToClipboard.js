/**
 * Copy the text contents to the device's clipboard
 */
export const copyToClipboard = (children, setText) => {
  try {
    navigator.clipboard
      .writeText(children)
      .then(setText("Copied to clipboard!"));
  } catch {
    navigator.clipboard
      .writeText(children.props.children)
      .then(setText("Copied to clipboard!"));
  }
};

export default copyToClipboard;
