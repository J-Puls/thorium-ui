export const updateFromVPName = (vpName, vpWidth) => {
  const vals = {
    xs: vpWidth,
    sm: vpWidth / 1.12,
    md: vpWidth / 1.17,
    lg: vpWidth / 1.2,
    xl: vpWidth / 1.3,
  };
  return vals[vpName];
};
