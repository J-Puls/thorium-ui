export const dropdownMenuStyle = {
  general: {
    paddingLeft: 0,
    paddingRight: 0,
    width: "100%",
    transformOrigin: "50% 0%"
  },
  float: {
    active: {
      zIndex: 10000,
      transitionDuration: "0.3s",
      transform: "scaleY(1)",
      opacity: 1,
      position: "absolute",
      top: 35
    },
    inactive: {
      zIndex: 10000,
      transitionDuration: "0.3s",
      transform: "scaleY(0)",
      opacity: 0,
      position: "absolute",
      top: 30
    }
  },
  block: {
    active: {
      overflow: "hidden",
      zIndex: 0,
      transition:
        "max-height 0.3s ease-in, transform 0.3s ease-in-out, opacity 0.3s ease-in-out, z-index 0.3s linear .3s",
      transform: "translate3d(0,0,0)",
      opacity: 1,
      display: "flex",
      maxHeight: "100vh"
    },
    inactive: {
      overflow: "hidden",
      zIndex: -1,
      transition:
        "max-height 0.15s ease-out, transform 0.3s ease-in-out, opacity 0.3s ease-in-out, z-index 0s linear",
      transform: "translate3d(0,-100%,0)",
      opacity: 0,
      maxHeight: 0
    }
  }
};
