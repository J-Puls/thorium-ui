/* React */
import React from "react";
/* Thorium-UI */
import { Layer, Block } from "../";
/* Subcomponents */
import Header from "./Header";
import Cell from "./Cell";
import Row from "./Row";
import Body from "./Body";
/* Style */
import { tableStyle } from "../Styles";
/* Utils */
import { appendStyle, mapPropsToResponsiveSize } from "../ThoriumUtils";
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
