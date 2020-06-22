import React, { Children, cloneElement } from "react";
import { tableStyle } from "../../Styles";

const TableRow = (props) => {
  let children;
  const style = { ...tableStyle.row };

  if (props.children.length > 0) {
    children = Children.map(props.children, (child) => {
      if (props.body) return cloneElement(child, { body: true });
      else return cloneElement(child, { footer: true });
    });
  }
  return <tr style={style}>{children}</tr>;
};

export default TableRow;
