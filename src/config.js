/* Breakpoint Configuration */

export const responsiveSizes = {
  12: 100,
  11: 91.666667,
  10: 83.333333,
  9: 75,
  8: 66.666667,
  7: 58.333333,
  6: 50,
  5: 41.666667,
  4: 33.333333,
  3: 25,
  2: 16.666667,
  1: 8.333333
};

export const containerSizes = {
  xs: 1,
  sm: 1.12,
  md: 1.17,
  lg: 1.2,
  xl: 1.3
};

export const breakpoints = {
  xs: [0, 575],
  sm: [576, 700],
  md: [701, 1024],
  lg: [1025, 1366],
  xl: [1367, 10000]
};

export const config = {
  breakpoints,
  containerSizes,
  responsiveSizes
};

export default config;
