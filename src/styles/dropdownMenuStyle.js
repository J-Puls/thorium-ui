export const dropdownMenuStyle = {
  general: {
    transitionDuration: ".25s",
    paddingLeft: 0,
    paddingRight: 0,
    width: "100%",
    transformOrigin: "50% 0%",
    zIndex: 9998,
  },
  float: {
    active: {
      transform: "scaleY(1)",
      opacity: 1,
      position: "absolute",
      top: 35,
    },
    inactive: {
      transform: "scaleY(0)",
      opacity: 0,
      position: "absolute",
      top: 30,
    },
  },
  block: {
    active: {
      display: "flex",
    },
    inactive: {
      display: "none",
    },
  },
};
