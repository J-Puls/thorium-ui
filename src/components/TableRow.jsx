/* React */
import React, { Children, cloneElement } from "react";
/* Hooks */
import { useTheme } from "../hooks/thoriumRoot/useTheme";

export const TableRow = (props) => {
  const theme = useTheme().table.row;

  let children;
  // Add "body" or "footer" prop to each respective Cell for proper rendering downstream
  if (props.children.length > 0) {
    children = Children.map(props.children, (child) => {
      if (props.body) return cloneElement(child, { body: true });
      else return cloneElement(child, { footer: true });
    });
  }

  let style = {};
  if (props.striped) style = theme.striped;
  return (
    <tr className="th-table-row" data-testid="th-table-row" style={style}>
      {children}
    </tr>
  );
};

export default TableRow;
