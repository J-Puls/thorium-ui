export const dropdownStyle = {
  body: {
    transition: "transform .3s, opacity .3s, max-height .4s",
    transformOrigin: "0 0",
    padding: 0
  },
  normal: {
    visible: {
      transform: "scaleY(1)",
      opacity: 1
    },
    hidden: {
      transform: "scaleY(0)",
      opacity: 0,
      maxHeight: "0px"
    }
  },
  floating: {
    visible: {
      transform: "scaleY(1)",
      opacity: 1,
      position: "absolute",
      height: 0
    },
    hidden: {
      transform: "scaleY(0)",
      opacity: 0,
      position: "absolute",
      height: 0
    }
  }
};
