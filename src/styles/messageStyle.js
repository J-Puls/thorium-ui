// Default message styling
export const messageStyle = {
  general: {
    borderRadius: "5px",
    fontWeight: 600,
    marginBottom: ".125rem",
    marginTop: ".25rem",
    paddingLeft: "1rem",
    paddingRight: "2rem",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    position: "relative",
    textAlign: "center",
    transitionDuration: "0.3s"
  },
  visible: { maxHeight: "100vh", opacity: 1 },
  hidden: {
    maxHeight: 0,
    opacity: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0
  },
  dismissed: { display: "none", marginBottom: 0, marginTop: 0 },
  dismiss: {
    background: "transparent",
    border: "none",
    cursor: "pointer",
    fontWeight: 900,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    position: "absolute",
    right: "1rem",
    top: "1rem"
  },
  title: {
    textAlign: "left",
    marginBottom: 0
  }
};
