import React from "react";
import Layer from "../../Layer";
import { mapPropsToAttrs } from "../../ThoriumUtils";

const FormGroup = props => {
  const style = {
    paddingLeft: "1rem",
    paddingRight: "1rem",
    paddingTop: 0,
    paddingBottom: ".5rem"
  };
  return (
    <Layer {...mapPropsToAttrs(props)} style={style} justify={props.justify}>
      {props.children}
    </Layer>
  );
};

export default FormGroup;
