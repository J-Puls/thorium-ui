import React from "react";
import { tableStyle } from "../../Styles";

export const TableCell = (props) => {
  const style = { ...tableStyle.cell };
  props.bordered && (style.border = "1px solid gray");
  if (props.header) return <th style={style}>{props.children}</th>;
  else if (props.body) return <td style={style}>{props.children}</td>;
  else if (props.footer) return <td style={style}>{props.children}</td>;
};

export default TableCell;
