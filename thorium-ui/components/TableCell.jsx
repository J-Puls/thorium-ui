/* React */
import React from "react";
/* Style */
import { tableStyle } from "../styles";

export const TableCell = (props) => {
  const style = { ...tableStyle.cell.general };
  props.bordered && (style.border = "1px solid gray");

  // Render the proper HTML table element for the position of the cell
  if (props.header)
    return (
      <th style={{ ...style, ...tableStyle.cell.header }}>{props.children}</th>
    );
  else if (props.body)
    return (
      <td style={{ ...style, ...tableStyle.cell.body }}>{props.children}</td>
    );
  else if (props.footer)
    return (
      <td style={{ ...style, ...tableStyle.cell.footer }}>{props.children}</td>
    );
};

export default TableCell;
