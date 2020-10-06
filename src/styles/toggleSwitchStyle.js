export const toggleSwitchStyle = {
  container: {
    alignItems: "flex-end",
    display: "inline-flex"
  },
  lg: {
    body: {
      display: "inline-block",
      height: "1.25rem",
      overflow: "hidden",
      position: "relative",
      width: "2.5rem"
    },
    off: {
      transform: "translateX(.025rem)"
    },
    on: {
      transform: "translateX(1.3rem)"
    },
    slider: {
      backgroundColor: "#fafafa",
      borderRadius: "50%",
      bottom: ".025rem",
      boxShadow: "inset 0 0 4px 2px #00000055",
      cursor: "pointer",
      height: "1.2rem",
      position: "absolute",
      transitionDuration: ".1s",
      width: "1.2rem",
      zIndex: 2
    }
  },
  normal: {
    body: {
      display: "inline-block",
      height: "1rem",
      position: "relative",
      width: "2rem"
    },
    off: {
      transform: "translateX(.025rem)"
    },
    on: {
      transform: "translateX(1.05rem)"
    },
    slider: {
      backgroundColor: "#fafafa",
      borderRadius: "50%",
      bottom: ".05rem",
      boxShadow: "inset 0 0 4px 2px #00000055",
      cursor: "pointer",
      height: ".9rem",
      position: "absolute",
      transitionDuration: ".1s",
      width: ".9rem",
      zIndex: 2
    }
  },
  origin: {
    height: 0,
    opacity: 0,
    width: 0
  },
  rail: {
    borderRadius: "1rem",
    bottom: 0,
    boxShadow: "inset 0 0 2px 1px #22222277",
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
    transitionDuration: ".1s",
    zIndex: 1
  }
};
