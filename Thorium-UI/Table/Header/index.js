import React, { Children, cloneElement } from "react";

export const TableHeader = (props) => {
  let children;
  if (props.children.length >= 0) {
    children = Children.map(props.children, (child) => {
      return cloneElement(child, {
        header: true,
      });
    });
  }

  return (
    <thead>
      <tr>{children}</tr>
    </thead>
  );
};

export default TableHeader;
