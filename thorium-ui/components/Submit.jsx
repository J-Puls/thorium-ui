/* React */
import React from "react";
/* Thorium-UI */
import { Button } from "../";

export const Submit = (props) => (
  <Button
    data-testid="submit"
    animated={props.animated}
    size={props.size}
    stretch={props.stretch}
    type="submit"
    variant={props.variant}
  >
    {props.children}
  </Button>
);

export default Submit;
