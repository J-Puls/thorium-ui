import React from "react";
import Layer from "../Layer";

const Form = props => {
  const style = {
    padding: ".5rem 1rem",
    border: "2px solid gray",
    borderRadius: ".25rem"
  };

  return (
    <form
      action={props.action}
      style={{ ...style, ...props.style }}
      className={props.className}
    >
      <Layer>{props.children}</Layer>
    </form>
  );
};

export default Form;
