/* React */
import React from "react";
/* Thorium-UI */
import Block from "./Block";
import Layer from "./Layer";
/* Subcomponents */
import { TableHeader as Header } from "./TableHeader";
import { TableCell as Cell } from "./TableCell";
import { TableRow as Row } from "./TableRow";
import { TableBody as Body } from "./TableBody";
/* Style */
import { tableStyle } from "../styles/tableStyle";
/* Utils */
import mapPropsToResponsiveSize from "../utils/mapPropsToResponsiveSize";
import appendStyle from "../utils/appendStyle";
/* PropTypes */
import PropTypes from "prop-types";

const propTypes = {
  bordered: PropTypes.bool,
  rounded: PropTypes.bool,
};

const defaultProps = {
  bordered: true,
  rounded: false,
};

const stylingProps = ["bordered", "rounded"];

export const Table = (props) => {
  let style = { ...tableStyle.wrapper };
  style = appendStyle(props, stylingProps, style, tableStyle);

  return (
    <Layer justify={props.justify}>
      <Block
        {...mapPropsToResponsiveSize(props)}
        style={{ ...style, ...props.style }}
      >
        <table style={tableStyle.table}>{props.children}</table>
      </Block>
    </Layer>
  );
};

Table.Header = Header;
Table.Cell = Cell;
Table.Row = Row;
Table.Body = Body;
Table.propTypes = propTypes;
Table.defaultProps = defaultProps;
export default Table;
