/* React */
import React, { Children, cloneElement } from "react";
/* PropTypes */
import PropTypes from "prop-types";

const propTypes = {
  striped: PropTypes.bool
};

const defaultProps = {
  striped: true
};

export const TableBody = (props) => {
  let children;

  // Pass "striped" prop to every other row if true
  if (props.children.length !== 0) {
    if (!props.striped) {
      children = Children.map(props.children, (child) => {
        return cloneElement(child, {
          body: true
        });
      });
    } else {
      children = Children.map(props.children, (child, key) => {
        return cloneElement(child, {
          body: true,
          striped: key % 2 === 0
        });
      });
    }
  }
  return (
    <tbody className="th-table-body" data-testid="th-table-body">
      {children}
    </tbody>
  );
};

TableBody.propTypes = propTypes;
TableBody.defaultProps = defaultProps;
export default TableBody;
