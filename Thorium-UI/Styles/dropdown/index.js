export const dropdownStyle = {
  body: {
    paddingLeft: 0,
    paddingRight: 0
  },
  visible: {
    normal: { paddingLeft: 0, paddingRight: 0 },
    floating: {
      transform: "translate3d(0px, 33px, 0px)",
      position: "absolute",
      top: 0,
      left: 15,
      willChange: "transform",
      zIndex: 1000,
      paddingLeft: 0,
      paddingRight: 0,
      marginTop: 1,
      border: "1px solid #00000088",
      borderRadius: ".125rem"
    }
  },
  hidden: {
    display: "none"
  }
};
