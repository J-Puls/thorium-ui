export const toggleSwitchStyle = {
  container: { display: "inline-flex", alignItems: "flex-end" },
  origin: {
    opacity: 0,
    width: 0,
    height: 0
  },
  rail: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    transitionDuration: ".1s",
    borderRadius: "1rem",
    zIndex: 1,
    boxShadow: "inset 0 0 2px 1px #22222277"
  },
  normal: {
    body: {
      position: "relative",
      display: "inline-block",
      width: "2rem",
      height: "1rem"
    },
    slider: {
      position: "absolute",
      cursor: "pointer",
      height: ".9rem",
      width: ".9rem",
      bottom: ".05rem",
      transitionDuration: ".1s",
      borderRadius: "50%",
      zIndex: 2,
      boxShadow: "inset 0 0 4px 2px #00000055",
      backgroundColor: "#fafafa"
    },
    off: { transform: "translateX(.025rem)" },
    on: { transform: "translateX(1.05rem)" }
  },
  large: {
    body: {
      position: "relative",
      display: "inline-block",
      width: "2.5rem",
      height: "1.25rem",
      overflow: "hidden"
    },
    slider: {
      position: "absolute",
      cursor: "pointer",
      height: "1.2rem",
      width: "1.2rem",
      bottom: ".025rem",
      transitionDuration: ".1s",
      borderRadius: "50%",
      zIndex: 2,
      boxShadow: "inset 0 0 4px 2px #00000055",
      backgroundColor: "#fafafa"
    },
    off: { transform: "translateX(1.3rem)" },
    on: { transform: "translateX(.025rem)" }
  }
};
