export const updateFromVPName = (vpName, vpWidth) => {
  switch (vpName) {
    case "xs":
      return vpWidth / 1.1;
    case "sm":
      return vpWidth / 1.12;
    case "md":
      return vpWidth / 1.17;
    case "lg":
      return vpWidth / 1.2;
    case "xl":
      return vpWidth / 1.3;
    default:
      return null;
  }
};
