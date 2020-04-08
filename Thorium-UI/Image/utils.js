export const updateFromProps = (props) => {
  const validModifiers = ["fluid", "fluidHalf", "rounded", "round"];
  let mods = {};
  for (let key of validModifiers) {
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
