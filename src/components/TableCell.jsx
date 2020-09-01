/* React */
import React from "react";
/* Style */
import { tableCellStyle } from "../styles/tableCellStyle";

export const TableCell = (props) => {
  const style = { ...tableCellStyle.general };
  props.bordered && (style.border = "1px solid gray");
  const header = (
    <th style={{ ...style, ...tableCellStyle.header }}>{props.children}</th>
  );
  const body = <td style={style}>{props.children}</td>;
  const footer = <td style={style}>{props.children}</td>;

  // Render the proper HTML table element for the position of the cell
  if (props.header) return header;
  else if (props.body) return body;
  else if (props.footer) return footer;
};

export default TableCell;
