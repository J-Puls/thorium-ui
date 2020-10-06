export const buttonStyle = {
  wrapper: {
    position: "relative",
    display: "inline-block"
  },
  general: {
    borderRadius: ".25rem",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "transparent",
    fontWeight: "400",
    outline: "none",
    cursor: "pointer",
    transitionDuration: ".15s",
    fontFamily: "inherit"
  },
  disabled: {
    cursor: "default"
  },
  lg: {
    paddingTop: ".5rem",
    paddingBottom: ".5rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    fontSize: "1.1rem"
  },
  normal: {
    paddingTop: ".375rem",
    paddingBottom: ".375rem",
    paddingLeft: ".75rem",
    paddingRight: ".75rem",
    fontSize: "1rem"
  },
  sm: {
    paddingTop: ".125rem",
    paddingBottom: ".125rem",
    paddingLeft: ".375rem",
    paddingRight: ".375rem",
    fontSize: ".9rem"
  },
  stretch: { width: "100%" },
  animate: {
    normal: {
      transform: "scale(.95, .9)"
    },
    stretch: {
      transform: "scale(.98, .9)"
    }
  }
};
