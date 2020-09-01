/* React */
import React, { Children, cloneElement } from "react";
/* ThoriumContext */
import { ThoriumConsumer } from "../context/ThoriumContext";

export const TableRow = (props) => {
  let children;

  // Add "body" or "footer" prop to each respective Cell for proper rendering downstream
  if (props.children.length > 0) {
    children = Children.map(props.children, (child) => {
      if (props.body) return cloneElement(child, { body: true });
      else return cloneElement(child, { footer: true });
    });
  }
  return (
    <ThoriumConsumer>
      {(context) => {
        let style = {};
        if (props.striped) style = context.theme.table.row.striped;
        return <tr style={style}>{children}</tr>;
      }}
    </ThoriumConsumer>
  );
};

export default TableRow;
